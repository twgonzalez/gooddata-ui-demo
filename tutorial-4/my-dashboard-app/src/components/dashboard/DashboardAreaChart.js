import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { numberFormat } from '@gooddata/numberjs';
import { MeasureGroupIdentifier, newTwoDimensional } from '@gooddata/sdk-model';
import { DataViewFacade } from '@gooddata/sdk-ui';
import { workspace } from '../../constants';
import { useBackend } from '../../contexts/Auth';

const DashboardAreaChart = ({ measure, viewBy, stackBy, filters, handleAreaClick = (d, i) => {} }) => {
    const backend = useBackend();

    const [chartData, setChartData] = useState([]);
    const [measureFormat, setMeasureFormat] = useState('#,###');
    const [series, setSeries] = useState([]);
    const [hoverDatum, setHoverDatum] = useState(null);
    const colors = ['#161E5E', '#223B89', '#316BA7', '#BEE0CC', '#419DC5', '#70C3D0'];

    const handleMouseEnter = (d) => {
        setHoverDatum(d);
    };

    const handleMouseLeave = () => {
        setHoverDatum(null);
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await backend
                .workspace(workspace)
                .execution()
                .forItems([measure, viewBy, stackBy], filters)
                .withDimensions(...newTwoDimensional([viewBy], [MeasureGroupIdentifier, stackBy]))
                .execute();

            const allData = await result.readAll();
            const dataView = DataViewFacade.for(allData);

            const series = dataView.data().series().toArray();

            const data = dataView.dataView.data;
            const datums = dataView.dataView.headerItems[0][0].map(
                (item) => item['attributeHeaderItem'].name,
            );
            const categories = dataView.dataView.headerItems[1][1].map(
                (item) => item['attributeHeaderItem'].name,
            );
            const plots = data.map((row, i) => ({
                xAxis: datums[i],
                ...row.reduce((acc, value, j) => {
                    acc[categories[j]] = parseFloat(value);
                    return acc;
                }, {}),
            }));

            setMeasureFormat(series[0].measureFormat());
            setChartData(plots);
            setSeries(categories);
        };
        fetchData();
    }, [measure, viewBy, stackBy, filters, backend]);

    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                width={500}
                height={400}
                data={chartData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 50,
                    bottom: 15,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="xAxis" />
                <YAxis
                    tickFormatter={(value) => numberFormat(value === -Infinity ? 0 : value, measureFormat)}
                />
                <Tooltip
                    formatter={(value) => numberFormat(value === -Infinity ? 0 : value, measureFormat)}
                />
                {series.map((d, i) => {
                    return (
                        <Area
                            type="monotone"
                            dataKey={d}
                            stackId="1"
                            stroke={colors[i % colors.length]}
                            fill={colors[i % colors.length]}
                            fillOpacity={d === hoverDatum ? 1 : 0.65}
                            key={i}
                            onClick={() => handleAreaClick(d, i)}
                            onMouseEnter={() => handleMouseEnter(d)}
                            onMouseLeave={() => handleMouseLeave()}
                        />
                    );
                })}
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default DashboardAreaChart;

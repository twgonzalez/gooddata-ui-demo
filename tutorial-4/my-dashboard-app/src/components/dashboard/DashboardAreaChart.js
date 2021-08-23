import React, { useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { createBackend } from "../../contexts/Auth/backend";
import {
  MeasureGroupIdentifier,
  newTwoDimensional,
  newDimension,
} from "@gooddata/sdk-model";
import { DataViewFacade } from "@gooddata/sdk-ui";
import { workspace } from "../../constants";
import * as Ldm from "../../ldm/full";
import { convertPostMessageToDrillablePredicates } from "@gooddata/sdk-ui-ext/esm/internal/utils/drillablePredicates";

const DashboardAreaChart = ({ measure, viewBy, stackBy, filters }) => {
  const backend = createBackend();

  const [result, setResult] = React.useState(null);
  const [chartData, setChartData] = React.useState([]);
  const [series, setSeries] = React.useState([]);
  const colors = [
    "#161E5E",
    "#223B89",
    "#316BA7",
    "#BEE0CC",
    "#419DC5",
    "#70C3D0",
  ];

  const fetchData = async () => {
    // debugger;
    try {
      const result = await backend
        .workspace(workspace)
        .execution()
        .forItems([measure, viewBy, ...stackBy], filters)
        .withDimensions(
          ...newTwoDimensional([viewBy, ...stackBy], [MeasureGroupIdentifier])
        )
        .execute();

      // const firstPage = await result.readWindow([0, 0], [10, 10]);
      const allData = await result.readAll();
      const dataView = DataViewFacade.for(allData);

      const slices = dataView.data().slices().toArray();

      const series = new Set();
      const xAxisTicks = new Set();
      const datums = slices.map((slice) => {
        const sliceTitles = slice.sliceTitles();
        const plotValue = slice.dataPoints()[0];

        series.add(sliceTitles[1]);
        xAxisTicks.add(sliceTitles[0]);

        return {
          seriesPlot: sliceTitles[1],
          xPlot: sliceTitles[0],
          y: Number(plotValue.rawValue),
        };
      });

      const plots = [];

      xAxisTicks.forEach((xTick) => {
        let dataPoint = {};
        dataPoint.xAxis = xTick;
        series.forEach((seriesPlot) => {
          dataPoint[seriesPlot] = datums.filter(
            (datum) => datum.seriesPlot === seriesPlot && datum.xPlot === xTick
          )[0].y;
        });
        plots.push(dataPoint);
      });

      //  console.log("data", data);
      setChartData(plots);
      setSeries([...series]);
      console.log("dataFetched()");
    } catch (error) {
      console.log("Yep, we got an error " + error);
    }
  };

  if (chartData.length === 0) {
    fetchData();
  }

  useEffect(() => {
    fetchData();
    /* eslint-disable-next-line */
  }, [measure, viewBy, stackBy]);

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
          tickFormatter={(value) =>
            new Intl.NumberFormat("en", {
              style: "currency",
              currency: "USD",
            }).format(value)
          }
        />
        <Tooltip
          formatter={(value) =>
            new Intl.NumberFormat("en", {
              style: "currency",
              currency: "USD",
            }).format(value)
          }
        />
        {series.map((d, i) => {
          return (
            <Area
              type="monotone"
              dataKey={d}
              stackId="1"
              stroke={colors[i % colors.length]}
              fill={colors[i % colors.length]}
              key={i}
            />
          );
        })}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default DashboardAreaChart;

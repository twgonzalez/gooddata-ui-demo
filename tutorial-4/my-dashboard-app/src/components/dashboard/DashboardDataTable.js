import React from 'react';
import { Execute } from '@gooddata/sdk-ui';
import MaterialTable from './MaterialTable';

const DashboardDataTable = ({ measures, dimensions, filters, handleRowClick }) => {
    return (
        <Execute seriesBy={measures} slicesBy={dimensions} filters={filters}>
            {(execution) => {
                const { isLoading, error, result } = execution;
                if (isLoading) {
                    return <div>Loading data...</div>;
                } else if (error) {
                    return <div>There was an error </div>;
                }

                if (!result) {
                    return <div>No results..</div>;
                }

                const slices = result.data().slices().toArray();
                const series = result.data().series().toArray();

                const dimensionsColumns = result.data().slicesCollection.descriptors.map((descriptor) => {
                    return {
                        id: descriptor.attributeHeader.localIdentifier,
                        numeric: false,
                        label: descriptor.attributeHeader.name,
                    };
                });

                const measuresColumns = series.map((measure) => {
                    return {
                        id: measure.descriptor.measureDefinition.measure.localIdentifier,
                        numeric: !isNaN(measure.dataPoints()[0].rawValue),
                        label: measure.measureTitle(),
                        formatter: measure.config.valueFormatter,
                        format: measure.descriptor.measureFormat(),
                    };
                });

                const columns = dimensionsColumns.concat(measuresColumns);

                const rows = slices.map((slice) => {
                    const dimensions = slice.sliceTitles().map((title) => title);
                    const data = slice.dataPoints().map((dp, index) => Number(dp.rawValue));
                    return dimensions.concat(data);
                });

                return <MaterialTable rows={rows} columns={columns} rowClickCallback={handleRowClick} />;
            }}
        </Execute>
    );
};

export default DashboardDataTable;

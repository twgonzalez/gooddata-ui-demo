import React from 'react';
import { Execute } from '@gooddata/sdk-ui';
import { numberFormat } from '@gooddata/numberjs';

import MaterialTable from './MaterialTable';

const DashboardDataTable = ({ measures, dimensions, filters, handleRowClick }) => {
    return (
        <Execute seriesBy={measures} slicesBy={dimensions} filters={filters}>
            {(execution) => {
                const { isLoading, error, result } = execution;
                if (isLoading) {
                    return <div>Loading data…</div>;
                }

                if (error) {
                    return <div>There was an error</div>;
                }

                if (!result) {
                    return <div>No results</div>;
                }

                const slices = result.data().slices().toArray();
                const series = result.data().series().toArray();

                const dimensionsColumns = result.dataView.result.dimensions[0].headers.map((header) => ({
                    id: header.attributeHeader.localIdentifier,
                    numeric: false,
                    label: header.attributeHeader.name,
                }));

                const measuresColumns = series.map((measure) => ({
                    id: measure.descriptor.measureDefinition.measure.localIdentifier,
                    numeric: !isNaN(parseFloat(measure.dataPoints()[0].rawValue)),
                    label: measure.measureTitle(),
                    formatter: numberFormat,
                    format: measure.descriptor.measureFormat(),
                }));

                const columns = dimensionsColumns.concat(measuresColumns);

                const rows = slices.map((slice) => {
                    const dimensions = slice.sliceTitles().map((title) => title);
                    const data = slice.dataPoints().map((dataPoint) => parseFloat(dataPoint.rawValue));
                    return [...dimensions, ...data];
                });

                return <MaterialTable rows={rows} columns={columns} rowClickCallback={handleRowClick} />;
            }}
        </Execute>
    );
};

export default DashboardDataTable;

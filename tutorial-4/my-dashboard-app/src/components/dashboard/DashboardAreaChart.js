import React from "react";
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

const DashboardAreaChart = ({ measures, viewBy, stackBy, filters }) => {
  const backend = createBackend();

  const [result, setResult] = React.useState(null);

  const dimensions = newTwoDimensional(
    [MeasureGroupIdentifier],
    [Ldm.ProductCategory]
  );

  const fetchData = async () => {
    // debugger;
    try {
      const result = await backend
        .workspace(workspace)
        .execution()
        .forItems(
          [Ldm.Revenue, Ldm.ProductCategory, Ldm.DateDatasets.Date.Month.Short],
          filters
        )
        // .withSorting(...sorting)
        .withDimensions(
          ...newTwoDimensional(
            [Ldm.ProductCategory, Ldm.DateDatasets.Date.Month.Short],
            [MeasureGroupIdentifier]
          )
        )
        .execute();

      // const firstPage = await result.readWindow([0, 0], [10, 10]);
      const allData = await result.readAll();
      const dataView = DataViewFacade.for(allData);
      console.log("dataView", dataView);

      const slices = dataView.data().slices().toArray();
      console.log("slices", slices);

      const data = slices.map((slice) => {
        const sliceTitles = slice.sliceTitles();
        const revenue = slice.dataPoints()[0];

        return {
          x1: sliceTitles[0],
          x2: sliceTitles[1],
          y: revenue.formattedValue(),
        };
      });
      console.log("data", data);

      console.log("yep we got a result length = " + allData.data[0].length);
    } catch (error) {
      console.log("Yep, we got an error " + error);
    }
  };

  fetchData();

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="amt"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default DashboardAreaChart;
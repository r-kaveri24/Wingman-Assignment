'use client';

import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { line } from "d3-shape"; 

const MixedChart = () => {
 
  const data = [
    { id: 1, day: "Mon", value: 10, lineValue: 35, secondLineValue: 25 },
    { id: 2, day: "Tue", value: 20, lineValue: 41, secondLineValue: 30 },
    { id: 3, day: "Wed", value: 30, lineValue: 38, secondLineValue: 35 },
    { id: 4, day: "Thu", value: 40, lineValue: 58, secondLineValue: 45 },
    { id: 5, day: "Fri", value: 50, lineValue: 45, secondLineValue: 50 },
    { id: 6, day: "Sat", value: 60, lineValue: 46, secondLineValue: 55 },
  ];

 
  const valuesToShow = [0, 10, 10, 10, 10, 10, 20];

  const LineLayer = ({ xScale, yScale }) => {
    const lineGenerator = line()
      .x((d) => xScale(d.day) + xScale.bandwidth() / 2) 
      .y((d) => yScale(d.lineValue)); 

    const secondLineGenerator = line()
      .x((d) => xScale(d.day) + xScale.bandwidth() / 2)
      .y((d) => yScale(d.secondLineValue)); 

    return (
      <>
        <path
          d={lineGenerator(data)}
          fill="none"
          stroke="#15B79F"
          strokeWidth={2}
        />
        <path
          d={secondLineGenerator(data)}
          fill="none"
          stroke="#8A94A6"
          strokeWidth={2}
          strokeDasharray="4 4"
        />
      </>
    );
  };

  const CustomGridLayer = ({ yScale}) => {
     const ticks = yScale.ticks().filter(tick => tick % 10 === 0); // Only include ticks at 10-point intervals

    return (
      <g>
        {ticks.map((tick, index) => (
          <line
            key={index}
            x1={0}
            x2='495'
            y1={yScale(tick)}
            y2={yScale(tick)}
            stroke="#C4C4C4"
            strokeDasharray="4 4" 
          />
        ))}
      </g>
    );
  };

  return (
    <div style={{ height: 284, width: 600, minWidth:300 }} >
      <ResponsiveBar
        data={data}
        keys={["value"]}
        indexBy="day"
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: "yellow_orange_red" }}
        borderRadius={2}
        axisBottom={{
          tickValues: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], 
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickValues: [0, 10, 20, 30, 40, 50, 60], 
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Consultations",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        axisRight={{
          format: (v) => (valuesToShow.includes(v) ? v : ""), 
          tickValues: valuesToShow, 
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "EXPERTS ONLINE",
          legendPosition: "middle",
          legendOffset: 40,
        }}
        layers={[
          "axes",
          "legends",
          CustomGridLayer,
          "bars",
          "markers",
          LineLayer, 
        ]}
        label={false}
        theme={{
          axis: {
            legend: {
              text: {
                fontSize: 8, 
                fill: '#C4C4C4', 
              },
            },
          },
        }}
      />
    </div>
  );
};

export default MixedChart;
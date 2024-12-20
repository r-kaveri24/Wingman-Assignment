'use client';

import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const BarChartComponent = () => {
  const chartData = [
    { name: "This Week", consultations: 20, ordersClosed: 18 },
    { name: "Last Week", consultations: 15, ordersClosed: 14 },
  ];

  // We need to adjust the ticks to show the custom series of 10, 10, 10, 10, 10, 20
  const yAxisTicks = [10, 10, 10, 10, 10, 20];

  const CustomGridLayer = ({ yScale, width }) => {
    const ticks = yScale.ticks().filter(tick => tick % 10 === 0); // Only include ticks at 10-point intervals

    return (
      <g>
        {ticks.map((tick, index) => (
          <line
            key={index}
            x1={0}
            x2={width}
            y1={yScale(tick)}
            y2={yScale(tick)}
            stroke="#C4C4C4"
            strokeDasharray="4 4" // Dotted line style
          />
        ))}
      </g>
    );
  };

  return (
    <div style={{ height: 400, width:200 }}>
      <ResponsiveBar
        data={chartData}
        keys={['consultations', 'ordersClosed']}
        indexBy="name"
        margin={{ top: 50, right: 30, bottom: 50, left: 40 }}
        
        
        innerPadding={3}
        groupMode="grouped"
        colors={['#CCFBEF', '#134E48']}
        borderRadius={{top:4 }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          
        }}
        axisLeft={{
          tickValues: yAxisTicks,
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        layers={[
          CustomGridLayer, // Adding the custom grid layer for Y-axis first
          "axes",
          "bars",
          "markers",
          "legends",
        ]}
        enableGridX={true}
        enableGridY={false} 
        label={false}
        tooltip={({ id, value, color }) => (
          <div style={{ color }}>
            <strong>{id}</strong>: {value}
          </div>
        )}
      />
    </div>
  );
};

export default BarChartComponent;
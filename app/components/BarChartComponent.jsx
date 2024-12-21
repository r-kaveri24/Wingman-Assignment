'use client';

import React from "react";
import {  XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from 'recharts';
import {comparisonData  } from '../../utils/database.js';


const BarChartComponent = () => {



    return (
      <div className="w-full h-[455px] col-span-1 lg:col-span-3 py-8">
      <div className="flex items-center gap-2 mb-6 px-6">
          <img src='/ChartBar.png' alt="Bar Chart" />
          <p className="text-xs text-gray-500 uppercase tracking-wider">VS PAST PERIOD</p>
      </div>
      <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
              <BarChart data={comparisonData} margin={{ top: 5, right: 30, left: 0, bottom: 25 }}>
                  <CartesianGrid
                      strokeDasharray="5 5"
                      vertical={false}
                      horizontal={true}
                      stroke="#C4C4C4"
                     
                  />
                  <XAxis
                      dataKey="period"
                      axisLine={false}
                      tickLine={false}
                      interval={0}
                      tick={{ fontSize: 12 }}
                      dy={10}
                  />
                  <YAxis axisLine={{ stroke: '#000000' }} tickLine={false} tick={{ fontSize: 12 }}  />
                  <Bar dataKey="consultations" fill="#CCFBEF" barSize={32} radius={[5, 5, 0, 0]} />
                  <Bar dataKey="orders" fill="#115E59" barSize={32} radius={[5, 5, 0, 0]} />
              </BarChart>
          </ResponsiveContainer>
      </div>

      <div className="flex flex-wrap items-center justify-center md:justify-start gap-1 md:gap-6 mt-1 md:mt-2 border-t-[1px] mx-6 pt-3 md:pt-6">
          <div className="flex items-center gap-[6px]">
              <div className="w-4 h-1 rounded-sm bg-[#CCFBEF]"></div>
              <span className="text-[10px] text-gray-600">Consultations</span>
          </div>
          <div className="flex items-center gap-[6px]">
              <div className="w-4 h-1 rounded-sm bg-[#115E59] "></div>
              <span className="text-[10px] text-gray-600">Orders closed</span>
          </div>
      </div>
  </div>);
};

export default BarChartComponent;
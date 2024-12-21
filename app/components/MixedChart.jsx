'use client';

import React from "react";
import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Bar } from 'recharts';
import { weeklyData } from '../../utils/database.js';

const MixedChart = () => {
 
 
return(
  <div className="w-full h-[100%] col-span-1 lg:col-span-7py-6  px-2 py-8">
                    <div className="flex items-center gap-2 mb-6 px-6">
                        <img src='./Vector(10).png' alt="chat" />
                        <p className="text-xs text-gray-500 uppercase tracking-wider">CONSULTATIONS</p>
                    </div>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart
                                data={weeklyData}
                                margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                            >
                                <CartesianGrid
                                    strokeDasharray="5 5"
                                    vertical={false}
                                    horizontal={true}
                                    stroke="#C4C4C4"
                                />
                                <XAxis
                                    dataKey="day"
                                    axisLine={false}
                                    tickLine={false}
                                    dy={10}
                                    tick={{ fill: '#94A3B8', fontSize: 12 }}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    dx={-10}
                                    tick={{ fill: '#94A3B8', fontSize: 12 }}
                                    ticks={[0, 10, 20, 30, 40, 50, 60]}
                                    domain={[0, 60]}
                                    yAxisId="left"
                                    label={{ value: 'CONSULTATIONS', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#94A3B8', fontSize: 8, opacity: 0.7 } }}
                                />
                                <YAxis
                                    yAxisId="right"
                                    orientation="right"
                                    axisLine={false}
                                    tickLine={false}
                                    dx={10}
                                    tick={{ fill: '#94A3B8', fontSize: 12 }}
                                    domain={[0, 20]}
                                    tickFormatter={() => '10'}
                                    label={{ value: 'EXPERTS ONLINE', angle: -90, position: 'insideRight', style: { textAnchor: 'middle', fill: '#94A3B8', fontSize: 8, opacity: 0.7 } }}
                                />
                                <Bar
                                    dataKey="experts"
                                    fill="#FEF9C3"
                                    yAxisId="right"
                                    barSize={30}
                                    radius={[4, 4, 0, 0]}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="incoming"
                                    stroke="#8A94A6"
                                    strokeWidth={2}
                                    dot={false}
                                    strokeDasharray="5 5"
                                    yAxisId="left"
                                />
                                <Line
                                    type="monotone"
                                    dataKey="answered"
                                    stroke="#15B79E"
                                    strokeWidth={2}
                                    dot={false}
                                    yAxisId="left"
                                />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-1 md:gap-6 mt-2 md:mt-4 border-t-[1px] mx-6 pt-3 md:pt-6">
                        <div className="flex items-center gap-2">
                            <div className="w-3 md:w-4 h-1 rounded-sm bg-[#94A3B8]"></div>
                            <span className="text-[10px] text-[#667085]">Incoming</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-1 rounded-sm bg-[#15B79E]"></div>
                            <span className="text-[10px] text-[#667085]">Answered</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-1 rounded-sm bg-[#FFE587] "></div>
                            <span className="text-[10px] text-[#667085]">Experts online</span>
                        </div>
                    </div>
                </div>
);
};

export default MixedChart;
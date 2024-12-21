import React from "react";
import styles from "./Glance.module.css";
import GlanceCard from "./GlanceCard";
import MixedChart from "./MixedChart";
import BarChart from "./BarChartComponent.jsx";
import Forcast from "./Forcast";
import Table from "./Table";
import { cardsData } from '../../utils/database.js';

const Glance = () => {



  return (
    <div className={`${styles.scrollbarHide} w-[100%] h-[100vh] flex items-end ml-14 justify-center overflow-x-scroll`}>
      <div
        className={` w-[95%] h-[80vh] flex  justify-around  `}
      >
        <div className={` ${styles.shadow} w-[100%] h-fit flex  flex-col rounded-[20px]`}>
          <div className="w-[95%] flex  flex-col items-center justify-center">
          <div className="w-[100%]  flex justify-between items-center mt-8">
            <p className=" text-[36px] font-medium ml-6">At a glance</p>
            <select
              className="w-[97px] h-9 flex items-center px-3 border border-[#DCDFE4] rounded-lg"
              style={{ boxShadow: "0px 1px 2px 0px #00000014" }}
            >
              <option value="1">Today</option>
              <option value="2">7 Days</option>
              <option value="3">Month</option>
            </select>
          </div>
          <div className="h-fit w-[100%] grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center "> {cardsData.map((card, index) => ( <GlanceCard key={index} title={card.title} value={card.value} discription={card.discription} icon={card.icon} /> ))} </div>
          <div className="w-[100%] h-[86px] flex justify-between items-center">
            <p className=" text-[36px] font-medium ml-6">Insights</p>
          </div>
          <div className="flex gap-[24px] items-center justify-around mt-8 flex-wrap">
            <div className="w-full md:w-[684px] h-[455px] rounded-[20px] flex items-center justify-center" style={{boxShadow: "0px 5px 22px 0px #0000000A, 0px 0px 0px 1px #0000000F"}}>
                <MixedChart/>
            </div>
           
            <div className="w-[260px] h-[455px] rounded-[20px] flex flex-col items-center justify-center gap-6"style={{boxShadow: "0px 5px 22px 0px #0000000A, 0px 0px 0px 1px #0000000F"}}>
                <BarChart/>
            </div>
            <div className={` ${styles.linerGradiant} w-[260px] h-[455px] rounded-[20px]`}style={{boxShadow: "0px 5px 22px 0px #0000000A, 0px 0px 0px 1px #0000000F"}}>
              <Forcast/>
            </div>
          </div>
          </div>
          <div className="w-[100%] h-[86px] flex justify-between items-center">
            <p className=" text-[36px] font-medium ml-6">Orders</p>
          </div>
          <div className="flex w-[100%] h-fit md:h-[414px] items-center justify-center" >
            <Table/>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Glance;

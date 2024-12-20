import React from "react";
import styles from "./Glance.module.css";
import GlanceCard from "./GlanceCard";
import MixedChart from "./MixedChart";
import BarChart from "./BarChartComponent.jsx";
import Forcast from "./Forcast";
import Table from "./Table";

const Glance = () => {

  const cardsData = [
    {
      title: "Consultations",
      value: "25",
      icon: <img src="/vector (10).png" alt="Consultations" style={{ width: '12px', height: '12px' }} />,
      discription: <p className="flex gap-2 text-sm items-center"><img src="/TrendUp.png" alt="" className="w-6 h-6"/><span className="text-[#15B79F]">15%</span> increase</p>
    },
    {
      title: "ORDERS PLACED",
      value: "500",
      discription: <p className="flex gap-2 text-sm items-center"><img src="/TrendDown.png" alt="" className="w-6 h-6"/><span className="text-[#F04438]">15%</span> increase</p>,
      icon: <img src="/tag.png" alt="Orders Placed" style={{ width: '12px', height: '12px' }} />,
    },
    {
      title: "CONVERSION",
      value: "2.5%",
      discription: <p className="flex gap-2 text-sm items-center"><img src="/TrendDown.png" alt="" className="w-6 h-6"/><span className="text-[#F04438]">15%</span> increase</p>,
      icon: <img src="/checkFat.png" alt="Conversion" style={{ width: '12px', height: '12px' }} />,
    },
    {
      title: "TOTAL SALES VALUE",
      value: "$10,000",
      discription: <p className="flex gap-2 text-sm items-center"><img src="/TrendUp.png" alt="" className="w-6 h-6"/><span className="text-[#15B79F]">15%</span> increase</p>,
      icon: <img src="/coins.png" alt="Total Sales Value" style={{ width: '12px', height: '12px' }} />,
    },
    {
      title: "AVG ORDER VALUE",
      value: "$200",
      discription: <p className="flex gap-2 text-sm items-center"><img src="/TrendUp.png" alt="" className="w-6 h-6"/><span className="text-[#15B79F]">15%</span> increase</p>,
      icon: <img src="/coin.png" alt="Avg Order Value" style={{ width: '12px', height: '12px' }} />,
    },
    {
      title: "COMMISSION PAID",
      value: "$100,000",
      discription: <p className="flex gap-2 text-sm items-center"><img src="/TrendUp.png" alt="" className="w-6 h-6"/><span className="text-[#15B79F]">15%</span> increase</p>,
      icon: <img src="/piggyBank.png" alt="Commission Paid" style={{ width: '12px', height: '12px' }} />,
    },
  ];

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
          <div className="flex gap-[24px] items-center justify-center mt-8 flex-wrap">
            <div className="w-[400px] md:w-[684px] h-[455px] rounded-[20px]" style={{boxShadow: "0px 5px 22px 0px #0000000A, 0px 0px 0px 1px #0000000F"}}>
              <div className="flex flex-col justify-center ml-6 mt-6">
                <div className="flex items-center gap-2 ">
                <img src="/vector (10).png" alt="messageIcon" className="w-3 h-3 " /><p>CONSULTATIONS</p>
                </div>
              <div className="flex mt-6 w-[300px] md:w-[636px] h-[284px] items-center ">
                
                <MixedChart/>
                
              </div>
              <hr className="w-[300px] md:w-[636px] bg-[#DCDFE4]" />
              <div className="flex gap-4 mt-4">
                <div className="w-[116px] h-9 flex items-center gap-2"><hr className="w-4 h-1 bg-[#8A94A6] rounded-[100px]" /> <p className=" text-xs font-normal text-[#667085]">Incoming</p> </div>
                <div className="w-[116px] h-9 flex items-center gap-2"><hr className="w-4 h-1 bg-[#15B79F] rounded-[100px]" /> <p className=" text-xs font-normal text-[#667085]">Answered</p> </div>
                <div className="w-[116px] h-9 flex items-center gap-2"><hr className="w-4 h-1 bg-[#FFE587] rounded-[100px]" /> <p className=" text-xs font-normal text-[#667085]">Experts online</p> </div>
              </div>
            </div>
            </div>
            <div className="w-[260px] h-[455px] rounded-[20px] flex flex-col items-center justify-center gap-6"style={{boxShadow: "0px 5px 22px 0px #0000000A, 0px 0px 0px 1px #0000000F"}}>
              <div className="w-[212px] h-[30px] mt-6 flex items-center gap-[9px]"><img src="./ChartBar.png" alt="" /> <p className=" text-xs font-semibold text-[#667085]">VS PAST PERIOD</p></div>
              <div className="w-[212px] h-[301px] flex flex-col gap-4">
                <BarChart/>
                <hr className="w-[100%]" />
              </div>
              <div className="w-[100%] h-9 flex items-center justify-center gap-4">
                <div className="flex items-center justify-center gap-2"><hr className="w-4 h-1 bg-[#CCFBEF] rounded-[100px]" /> <p className=" text-xs font-normal text-[#667085]">Consultations</p> </div>
                <div className="flex items-center justify-center gap-2"><hr className="w-4 h-1 bg-[#134E48] rounded-[100px]" /> <p className=" text-xs font-normal text-[#667085]">Orders closed</p> </div>
              </div>
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

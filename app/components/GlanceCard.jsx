import React from "react";

const GlanceCard = ({ title, value, discription, icon }) => {
  return (
    <div
      className=" w-[100%]  h-[156px] xl:w-[396px]  rounded-[20px] p-4 flex flex-col  justify-center"
      style={{
        boxShadow: "0px 5px 22px 0px #0000000A, 0px 0px 0px 1px #0000000F",
        backgroundColor: "#fff",
      }}
    >
      <div className="flex justify-center gap-2  flex-col">
        <div className="flex gap-2">
        <div className="w-3 h-3">{icon}</div>
          <h3 className="text-xs font-bold text-[#667085]">{title}</h3>
        </div>
        
        <div className="text-[32px] font-medium ">{value}</div>
        <div className="text-2xl font-bold text-[#667085] ">{discription}</div>
      </div>
      
    </div>
  );
};

export default GlanceCard;

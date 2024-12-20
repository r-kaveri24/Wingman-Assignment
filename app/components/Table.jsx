'use client'
import React, { useState } from "react";

const Table = () => {

  const data = [
    { id: 1, product: "Product Name 1", date: "24 Apr 2024", timeSpent: "2h 5m", orderValue: "$120.21", commission: "$55" },
    { id: 2, product: "Product Name 2", date: "24 Apr 2024", timeSpent: "2h 5m", orderValue: "$120.21", commission: "$55" },
    { id: 3, product: "Product Name 3", date: "24 Apr 2024", timeSpent: "2h 5m", orderValue: "$120.21", commission: "$55" },
    { id: 4, product: "Product Name 4", date: "24 Apr 2024", timeSpent: "2h 5m", orderValue: "$120.21", commission: "$55" },
    { id: 5, product: "Product Name 5", date: "24 Apr 2024", timeSpent: "2h 5m", orderValue: "$120.21", commission: "$55" },
    { id: 6, product: "Product Name 6", date: "24 Apr 2024", timeSpent: "2h 5m", orderValue: "$120.21", commission: "$55" },
    { id: 7, product: "Product Name 7", date: "24 Apr 2024", timeSpent: "2h 5m", orderValue: "$120.21", commission: "$55" },
    { id: 8, product: "Product Name 8", date: "24 Apr 2024", timeSpent: "2h 5m", orderValue: "$120.21", commission: "$55" },
  ];


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);


  const totalPages = Math.ceil(data.length / itemsPerPage);
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-5 w-[100%] mb-3">
      <div className="rounded-lg overflow-hidden border border-[#DCDFE4] mb-3 h-fit md:h-[350px]">
      <table className=" w-[100%] h-[100%] ">
        <thead className="border border-[#DCDFE4] bg-[#F9FAFB] overflow-hidden" >
          <tr>
            <th className="text-left p-4 text-sm font-normal text-[#667085]">Product</th>
            <th className="text-left p-4 text-sm font-normal text-[#667085]">Date</th>
            <th className="text-left p-4 text-sm font-normal text-[#667085]">Time Spent</th>
            <th className="text-left p-4 text-sm font-normal text-[#667085]">Order Value</th>
            <th className="text-left p-4 text-sm font-normal text-[#667085]">Commission</th>
            <th className="text-left p-4 text-sm font-normal text-[#667085]"></th>
          </tr>
        </thead>
        <tbody className="overflow-hidden">
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td className="p-[10px]">
                <div className="flex items-center">
                  <img
                    src="./Avatar.png"
                    alt="product"
                    className="w-10 h-10 mr-[10px]"
                  />
                  <p className="text-base font-normal text-[#212636] ">{item.product}</p>
                </div>
              </td>
              <td className="p-[10px] text-base font-normal text-[#212636] ">{item.date} <p className="text-xs font-normal text-[#212636] ">10:24 AM</p></td>
              <td className="p-[10px] text-base font-normal text-[#212636]">{item.timeSpent}</td>
              <td className="p-[10px] text-base font-normal text-[#212636]">{item.orderValue}</td>
              <td className="p-[10px] text-base font-bold text-[#212636]">{item.commission}</td>
              <td className="p-[10px] text-base font-normal text-[#212636] flex justify-end">
                <a href="#" className="p-[10px] text-xs font-normal text-[#8A94A6] flex gap-3" style={{ textDecoration: "none" }}>
                  View Chat <img src="./ArrowUpRight.png" alt="" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

    
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            style={{
              padding: "10px 15px",
              border: "1px solid #115E56",
              backgroundColor: currentPage === index + 1 ? "#115E56" : "#fff",
              color: currentPage === index + 1 ? "#fff" : "#115E56",
              cursor: "pointer",
              borderRadius:"50%"
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Table;

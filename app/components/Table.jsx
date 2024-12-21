'use client';
import React, { useState } from "react";
import { data } from '../../utils/database.js';
import Link from 'next/link';

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const itemsPerPage = 4;

  const sortedData = React.useMemo(() => {
    let sortableItems = [...data];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="p-5 w-[100%] mb-3">
      <div className="rounded-lg overflow-hidden border border-[#DCDFE4] mb-3 h-fit md:h-[350px]">
        <table className="w-[100%] h-[100%]">
          <thead className="border border-[#DCDFE4] bg-[#F9FAFB] overflow-hidden">
            <tr>
              <th className="text-left p-4 text-sm font-normal text-[#667085]">Product</th>
              <th className="text-left p-4 text-sm font-normal text-[#667085]">
                
                <button onClick={() => requestSort('date')}>Date
                  {sortConfig.key === 'date' && sortConfig.direction === 'asc' ? '↑' : '↓'}
                </button>
              </th>
              <th className="text-left p-4 text-sm font-normal text-[#667085]">Time Spent</th>
              <th className="text-left p-4 text-sm font-normal text-[#667085]">
               
                <button onClick={() => requestSort('orderValue')}>  Order Value
                  {sortConfig.key === 'orderValue' && sortConfig.direction === 'asc' ? '↑' : '↓'}
                </button>
              </th>
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
                  <Link href="/chat" className="p-[10px] text-xs font-normal text-[#8A94A6] flex gap-3" style={{ textDecoration: "none" }}>
                    View Chat <img src="./ArrowUpRight.png" alt="" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{
            padding: "10px 15px",
            border: "1px solid #115E56",
            backgroundColor: "#fff",
            color: "#115E56",
            borderRadius: "8px",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
          }}
        >
          Previous
        </button>
        <button
          style={{
            padding: "10px 15px",
            border: "1px solid #115E56",
            backgroundColor: "#115E56",
            color: "#fff",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          {currentPage}
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{
            padding: "10px 15px",
            border: "1px solid #115E56",
            backgroundColor: "#fff",
            color: "#115E56",
            borderRadius: "8px",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
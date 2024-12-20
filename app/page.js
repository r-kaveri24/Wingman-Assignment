'use client'
import React from "react";
import SideNavbar from "../app/components/SideNavbar";
import TopNavbar from "../app/components/TopNavbar";
import Glance from "../app/components/Glance";

const Home = () => {
  return (
    <div>
      <SideNavbar />
      <div className="flex">
        <TopNavbar />
        <Glance />
      </div>
    </div>
  );
};
export default Home;
'use client'
import React from "react";
import SideNavbar from "../components/SideNavbar";
import TopNavbar from "../components/TopNavbar";
import Glance from "../components/Glance";

const Index = () => {
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

export default Index;

"use client";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartThree from "../Charts/ChartThree";
import ChartTwo from "../Charts/ChartTwo";
import ChartFour from "../Charts/ChartFour";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5 ">
        <ChartOne />
        <ChartThree />
        <ChartTwo />
        <ChartFour />
      </div>
    </>
  );
};

export default Dashboard;

"use client";
import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const options: ApexOptions = {
  colors: ["#F6921E"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "bar",
    height: 335,
    stacked: false,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 15,
      columnWidth: "40%",
      borderRadiusApplication: "around",
      borderRadiusWhenStacked: "all",
    },
  },
  dataLabels: {
    enabled: false,
  },

  xaxis: {
    categories: ["M", "T", "W", "T", "F", "S", "S"],
    labels: {
      show: false
    },
    title: {
      text: "Acknowledgement",
      style: {
        color: "#737780",
        fontSize: "12px",
        fontWeight: "300px"
      }
    }
  },

  yaxis: {
    title: {
      text: "Case Number",
      style: {
        color: "#737780",
        fontSize: "12px",
        fontWeight: "300px"
      }
    }
  },

  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Satoshi",
    fontWeight: 500,
    fontSize: "14px",

    markers: {
      radius: 50,
    },
  },
  fill: {
    opacity: 1,
  },
};

interface ChartTwoState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartFour: React.FC = () => {
  const [state, setState] = useState<ChartTwoState>({
    series: [
      {
        name: "Acknowledgement",
        data: [44, 55, 41, 67, 22, 43, 65],
      },
    ],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;

  return (
    <div className="col-span-12 rounded-xl bg-white p-9 shadow-default dark:bg-boxdark xl:col-span-6">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Legal Hold Acknowledgement Status by Case
          </h4>
        </div>
      </div>

      <div>
        <div id="chartTwo" className="-ml-5 -mb-6">
          <ApexCharts
            options={options}
            series={state.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartFour;

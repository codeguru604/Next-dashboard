"use client";
import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ChartThreeState {
  series: number[];
}

const options: ApexOptions = {
  chart: {
    type: "donut",
  },
  colors: ["#3A0CA3", "#F6921E", "#D8DF20", "#AE262C", "#323140"],
  labels: ["Litigation (12%)", "Intellectual Property (13%)", "Regulatory(13%)", "Internal Investigation (12%)", "Employment(50%)"],
  legend: {
    show: true,
    position: "bottom",
  },

  plotOptions: {
    pie: {
      startAngle: 90,
      endAngle: 450,
      donut: {
        size: "70%",
        background: "transparent",
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: '40px',
            fontWeight: 600,
            offsetY: 10,
          },
          value: {
            show: false,
          },
          total: {
            show: true,
            label: '343',
          }
        }
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const ChartThree: React.FC = () => {
  const [state, setState] = useState<ChartThreeState>({
    series: [12, 13, 13, 12, 50],
  });

  return (
    <div className="col-span-12 rounded-xl bg-white px-5 pt-7.5 pb-5 shadow-default dark:bg-boxdark sm:px-7.5 xl:col-span-4">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Broken Down By Case Type
          </h5>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={state.series}
            type="donut"
          />
        </div>
      </div>
    </div>
  );
};

export default ChartThree;

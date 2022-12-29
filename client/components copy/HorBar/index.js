import React from "react";
import { Bar, HorizontalBar } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";

export default function HorBar({ chartData }) {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    labels: {
      render: "percentage",
    },
  };

  return <HorizontalBar data={chartData} options={options} />;
}

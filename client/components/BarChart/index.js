import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function BarChart({ chartData }) {
  // Bar.defaults.global.legend.display = false;
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}

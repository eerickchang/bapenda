import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";

export default function BarChart({ chartData }) {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    labels: {
      render: "percentage",
    },
    // responsive: true,
    maintainAspectRatio: false,
  };

  return <Bar data={chartData} options={options} />;
}

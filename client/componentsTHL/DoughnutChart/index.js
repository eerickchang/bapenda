import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({ data, txtTitle = "0" }) {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scale: {
      pointLabels: {
        fontWeight: 700,
      },
    },
    cutout: 55,
    // responsive: true,
    maintainAspectRatio: false,
  };

  const plugins = [
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 60).toFixed(2);
        ctx.font = fontSize + "em Droid Sans";
        ctx.fontWeight = 700;
        ctx.textBaseline = "middle";
        var text = `${txtTitle}%`,
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillStyle = "rgba(17, 35, 80, 1)";
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  return <Doughnut data={data} options={options} plugins={plugins} />;
}

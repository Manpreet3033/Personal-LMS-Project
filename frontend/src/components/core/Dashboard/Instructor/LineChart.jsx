import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sales Set 1",
        data: [3, 6, 5, 9, 4, 6, 9],
        backgroundColor: "rgba(165, 55, 253, 0.2)",
        hoverBorderColor: "rgba(165, 55, 253, 0.7)",
        borderColor: "rgba(165, 55, 253, 1)",
        borderWidth: 2,
        pointBorderColor: "rgba(165, 55, 253, 0.1)",
        pointHoverBorderColor: "rgba(165, 55, 253, 0.5)",
      },
      {
        label: "Sales Set 2",
        data: [5, 4, 7, 9, 3, 2, 1],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        hoverBorderColor: "rgba(54, 162, 235, 0.7)", 
        borderColor: "rgba(54, 162, 235, 1)", 
        borderWidth: 2,
        pointBorderColor: "rgba(54, 162, 235, 0.1)", 
        pointHoverBorderColor: "rgba(54, 162, 235, 0.5)", 
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 0,
        max: 10,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;

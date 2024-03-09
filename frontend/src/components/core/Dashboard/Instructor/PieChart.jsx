import React from 'react'
import { Chart as ChartJS, ArcElement,Tooltip,Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement,Tooltip,Legend);

const PieChart = () => {
    const data = {
        labels: ['Student','Instructor'],
        datasets: [{
            label: "Users",
            data: [35,10],
            backgroundColor: ["rgba(165, 55, 253, 0.7)","rgba(255, 148, 112,0.7)"],
            hoverBackgroundColor: ["rgba(165, 55, 253, 0.3)","rgba(255,148,102,0.4"],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
            borderWidth: 1
        }]
    }
    const options = {

    }
  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  )
}

export default PieChart

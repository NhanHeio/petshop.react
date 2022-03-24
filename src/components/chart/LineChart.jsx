import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const LineChart = () => {
    // let labels = ''
    // if(filter.type === 'year'){
    //     labels = ['Quarter 1','Quarter 2','Quarter 3','Quarter 4']
    // }else{

    // }
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Statistics',
          },
        },
      };
      
    //   let labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
      let data = {
        labels : ['Quarter 1','Quarter 2','Quarter 3','Quarter 4'],
        datasets: [
          {
            label: 'Orders',
            data: [132,124,534,123],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Bookings',
            data: [100,200,50,124],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
    return (
        <Line options={options} data={data} />
    )
}

export default LineChart
import React, { useState, useEffect, memo } from 'react';
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


const LineChart = ({lineChart,filter}) => {
    let labels = ''
    if(filter.type === 1){
        labels = ['Quarter 1','Quarter 2','Quarter 3','Quarter 4']
    }else{
        labels = ['January','February','March','April','May','June','July','August','September','October','November','December']

    }
    const [booking, setBooking] = useState([])
    const [order, setOrder] = useState([])
    
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'Statistics',
          },
        },
      };
      
      let data = {
        labels : labels,
        datasets: [
          {
            label: 'Orders',
            data: order,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Bookings',
            data: booking,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };

      useEffect(() => {
        if(lineChart){
          setBooking(lineChart.Booking)
          setOrder(lineChart.Order)
          // console.log(booking)
        }
      },[lineChart])
    return (
        <Line options={options} data={data} />
    )
}

export default memo(LineChart);
import React, {useState} from 'react'
import ReactApexChart from "react-apexcharts";

export default function Barchart({currentArray}){
    const barChart={  
        chart: {
        type: 'bar'
        },
      series: [
        {
          name: 'Value',
          data: currentArray
        }
      ],
      // xaxis: {
      //   categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      // }
    }

    return(
    <ReactApexChart 
      options = {barChart}
      series = {barChart.series} 
      type = "bar" 
      width ={500}/>
    )
}
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
    }

    return(
    <ReactApexChart 
      options = {barChart}
      series = {barChart.series} 
      type = "bar" 
      width ={500}/>
    )
}
import logo from './logo.svg';
import React, {useCallback, useState} from 'react'
import ReactApexChart from "react-apexcharts";
import './App.css';
import Barchart from './Barchart'

let unSortedArray = [7,2,4,1,6,8,12,20,25,40,30]
//BubbleSort Function

function bubbleSort(unSortedArray){
  let newArray = []
  let swapped = false;
  for (let i = 0; i < unSortedArray.length - 1; i++){
      swapped = false
      for (let j = 0; j < unSortedArray.length - 1 ; j++){
          if (unSortedArray[j] > unSortedArray[j+1]){
              unSortedArray= swap(unSortedArray, j, j+1)
              swapped = true
              newArray.push(unSortedArray);
          }
      }
      if(!swapped){
          break;
      }
  }
  console.log(newArray)
  return newArray
}



function swap(currentArray, index1, index2,setter){
  let newArray = [...currentArray]
  newArray[index1] = currentArray[index2]
  newArray[index2] = currentArray[index1]
  return newArray;
}

function App() {
  const [currentArray , setArray] = useState(unSortedArray)
  
  function handleClick(){
    let newArraySet = bubbleSort(currentArray)
    console.log(newArraySet)
    newArraySet.forEach(element => {
      setArray(element);
    })
  }
  console.log('render')
  return (
    <div className="App">
      <Barchart currentArray = {currentArray}/>
      <button className = "button" onClick = {handleClick}>Sort this shit</button>
    </div>
  );
}

export default App;

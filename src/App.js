import React, {useState} from 'react'
import './App.css';
import Barchart from './Barchart'

let unSortedArray = [1,2,3,4,5,6,7,8,9,10]
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
  const [currentArray , setArray] = useState([7, 5, 8, 2, 6, 1, 9, 3, 10, 4])

  console.log(currentArray)


  async function handleClick(){
    let newArraySet = bubbleSort(currentArray)
    for (let i = 0; i < newArraySet.length ; i++ ){
      await wait(200)
      setArray(newArraySet[i]);
    }
  }

  async function handleRandomer(){
    let newArray = currentArray;
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    setArray(newArray)
  }

  function wait(ms){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("done waiting");
        resolve(ms)
      }, ms)
    })
  }

  return (
    <div className="App">
      <Barchart currentArray = {currentArray}/>
      <button onClick = {handleClick}>Sort the Array</button>
      {/* <button onClick = {handleRandomer}>Randomize</button> */}
    </div>
  );
}
export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  //let counter=20

  const addValue =()=>{
    if(counter<20){
      //counter=counter + 1
      setCounter(counter+1)
      console.log(counter+1)
    }
    console.log(counter+1)
  }

  const subValue =()=>{
    if(counter>0){
      setCounter(counter-1)
      console.log(counter-1)
    }
    console.log(counter-1)
  }

  return (
    <>
      <h1> Counter app</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value (limit 20)</button>
      <br/>
      <br/>
      <button onClick={subValue}>Subtract value (limit 0)</button>
    </>
  )
}

export default App

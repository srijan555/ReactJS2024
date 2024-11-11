import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mycard from './components/card'


function App() {
  const [count, setCount] = useState(0)

  let person={
    name:"Srijan",
    age:28
  }
  let array=[1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Mycard song="Kesariya" pobj={person} myarr={array} singer="Arijit Singh"/>
      <Mycard song="Banjaara" pobj={person} myarr={array} />
    </>
  )
}

export default App

import { useState } from 'react'
import Demo from './Demo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      This is my vite app
      <Demo/>
    </>
  )
}

export default App

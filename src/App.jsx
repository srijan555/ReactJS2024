import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1>This is mini context project for centralized state management 
      and to restrict prop drilling for passing props to each child component </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App

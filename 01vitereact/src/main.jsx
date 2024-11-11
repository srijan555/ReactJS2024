import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyDemoApp(){
  return(
    <h3>This is my custom react app that is in main</h3>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyDemoApp/>
  </StrictMode>,
)

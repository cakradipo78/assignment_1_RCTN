import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from './pages/HomePage'
import CurrencyPages from './pages/CurrencyPages'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  //  < <HomePage/>>
  <CurrencyPages/>
  )
}

export default App
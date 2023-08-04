import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import { GlobalProvider } from './context/GlobalContext'

function App() {

  return (
    <GlobalProvider>
      <Navbar/>
      <div className="container mt-5 w-50">
        <Card/>
      </div>
    </GlobalProvider>
  )
}

export default App

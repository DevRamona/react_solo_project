// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Picture from "./components/Picture"
import Home from "./components/Home"
import React from 'react'
import About from "./components/About"
import Interest from './components/Interest'
import Footer from './components/Footer'

export default function App () {
  return (
    <div className='bg-black flex flex-col justify-center items-center'>
      <Picture/>
      <Home/>
      <About/>
      <Interest/>
      <Footer/>

    </div>
    
    
  )
}

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Picture from "./components/Picture"
import Home from "./components/Home"
import React from 'react'


export default function App () {
  return (
    <div className='bg-black flex  flex-col'>
      <Picture/>
      <Home/>

    </div>
    
    
  )
}

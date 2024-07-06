import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <h1>Hello !! Welcome to The Products App !!</h1>
    <Navbar/>
    <br>
      </br>
      <Routes>
      <Route path='/'element={<Home/>}></Route>
    <Route path='/add' element={<Add/>}></Route>

      </Routes>
      </>  
    
  )
}

export default App
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Profile from './pages/Profile'

const App = () => {
  return (
    
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/' element={<About/>} />
      <Route path='/' element={<Signin/>} />
      <Route path='/' element={<Signup/>} />
      <Route path='/' element={<Profile/>} />

     </Routes>
     </BrowserRouter>
     
  )
}

export default App
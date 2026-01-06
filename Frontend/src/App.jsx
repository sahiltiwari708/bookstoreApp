import React from 'react'
import Home from './Home/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
import Courses from './Courses/Courses'
import Signup from './components/Signup'
import Contact from './Contact/contact'
import About from './About/About'
import { useAuth } from './context/AuthProvider'


function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <>
<div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/course' element={authUser?<Courses/>:<Navigate to='/signup'/> }/>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />


      
      
    </Routes>
</div>

    </>
  )
}

export default App;
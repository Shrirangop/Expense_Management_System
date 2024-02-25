import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landingpage from './Components/Landingpage/Landingpage';
import {Routes,Route} from "react-router-dom"
import Login_form from './Components/Loginform/Login_Form';
import Signup_form from './Components/Signup_Form/Signup_Form';


function App() {
  

  return (
    <>
    <div className="h-screen w-screen m-0 p-0 bg-gradient-to-r from-purple-800 from-20% to-pink-700 to-100% ... flex flex-col justify-center  items-center">
    <Routes>
      <Route path="/" element={<Landingpage/>}></Route>
      <Route path="/Login_Form" element={<Login_form />}></Route>
      <Route path="/Signup_Form" element={<Signup_form />}></Route>
      </Routes>
     
    </div>
      
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landingpage from './Components/Landingpage/Landingpage';
import {Routes,Route} from "react-router-dom"
import Login_form from './Components/Loginform/Login_Form';
import Signup_form from './Components/Signup_Form/Signup_Form';
import DashBoard from './Components/Individuals/DashBoard/DashBoard';
import Add_Expense from './Components/Add_Expense/Add_Expense';
import ExpenseForm from './Components/Add_Expense/Expense_form/Expenseform';


function App() {
  

  return (
    <>
    <div className="custom_app bg-gradient-to-r from-purple-800 from-20% to-pink-700 to-100% ... flex flex-col justify-center  items-center mx-auto">
    <Routes>
      <Route path="/" element={<Landingpage/>}></Route>
      <Route path="/Login_Form" element={<Login_form />}></Route>
      <Route path="/Signup_Form" element={<Signup_form />}></Route>
      <Route path="/Individual" element={<DashBoard />}></Route>
      <Route path="/Expense" element={<Add_Expense />}></Route>
      <Route path="/form" element={<ExpenseForm/>}></Route>
      
      </Routes>
     
    </div>
      
    </>
  )
}

export default App

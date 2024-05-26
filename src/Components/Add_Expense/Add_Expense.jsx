import React from "react";
import Navigation from "../Individuals/DashBoard/Navigation"
import { FaRupeeSign } from "react-icons/fa";
import Expense_box from "./Expense_box/Expense_box";
import ExpenseForm from "./Expense_form/Expenseform";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default function Add_Expense() {
    const[value,setvalue] = useState(0)
    const [expenses,setexpenses] = useState([]);

    useEffect(() => {
    
    try{
        axios.get(`https://expense-management-system-six.vercel.app/Expense`).then((res) => {
            if (res.status == 200) {
                setexpenses(res.data)
                // console.log(expenses[0]);
                setvalue(expenses.reduce((acc,expense) => {
                    return acc + expense.amount;
                },0))
            }
        })
    }
    catch (err) {
        console.log(err);
    }



   

    },[])

    
    // console.log(expenses);
    


    return (
        <div className = "bg-white w-full h-full flex justify-center items-center">
            <Navigation></Navigation>

            <div className="showexpense w-5/6 h-full flex flex-col justify-center items-center">
                <div className="title w-4/5 h-1/6 text-black text-3xl font-bold flex items-center p-2 justify-start">
                    Expenses
                </div>

                <div className="Expense_overview w-4/5 h-1/6 flex justify-center items-center">
            <div className="w-1/2 h-full flex items-start justify-start">
                   <button className="w-2/5 h-2/5 bg-black text-white text-xl font-bold rounded-lg shadow-md hover:shadow-xl focus:border-2" >
                   <Link to = "/form">Add Expense</Link>
                    </button>
                    </div>

                   
                  

                    <div className="total w-1/2 h-full font-bold text-2xl flex justify-end items-start">
                        Total Expense : <span className="text-red-600 font-bold text-3xl flex "><FaRupeeSign /> {value}</span>
                    </div>
                </div>

                <div className="expense_list w-4/5 h-2/3 flex flex-col justify-start items-center">
                    {
                        expenses.map((expense) => {

                            return <Expense_box name={expense.title} value={expense.amount} date={expense.date} ></Expense_box>
                        })
                    }
{/* 
                    <Expense_box name={expenses[0]} value={expenses[0]} date={expenses[0]}></Expense_box> */}

                </div>


            </div>
        </div>
    )
}
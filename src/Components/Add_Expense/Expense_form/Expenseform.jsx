import React, { useState } from 'react';
import axios from 'axios';
import "./ExpenseForm.css";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';



const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const navigate = useNavigate();
   

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       
        try {
            axios.post(`http://localhost:4000/Expense`, {
                title: title,
                date: date,
                amount: amount,
            }).then((res) => {
                if (res.status == 200) {
                    const { message } = res.data;
                    console.log(message);
                    if (message) {
                        alert("Expense added successfully");
                        navigate("/Expense");

                    }
                    else {
                        alert("Failed to add expense");
                    }
                }
            })
        }
        catch (err) {
            console.log(err);
        }

    };

  

    
    return (
        <div className = "w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center custom">
            <div className="form_holder w-1/4 h-2/5 bg-white shadow-lg rounded-lg flex flex-col justify-start items-center">
            <div className="close w-full h-1/6 flex justify-end items-start p-2 text-lg  ">
            <IoMdClose size = {20} className = "cursor-pointer" />
            </div>
        <form onSubmit={handleSubmit} className = "flex flex-col justify-center items-center w-full h-4/5">
            
            <div className = "w-4/5 h-1/4 text-black font-bold ">
                <div>Title:</div>
                <input type="text" value={title} onChange={handleTitleChange}  className = "text-black border-2 border-black rounded-md focus:outline-none w-full h-auto"/>
            </div>
            <div  className = "w-4/5 h-1/4 text-black font-bold mt-2">
                <div>Date:</div>
                <input type="date" value={date} onChange={handleDateChange}  className = "text-black border-2 border-black rounded-md focus:outline-none w-full h-auto"/>
            </div>
            <div className = "w-4/5 h-1/4 text-black font-bold mt-2">
                <div>Amount:</div>
                <input type="number" value={amount} onChange={handleAmountChange} className = "text-black border-2 border-black rounded-md focus:outline-none w-full h-auto" />
            </div>
            <button type="submit" className = "w-4/5 h-1/5 text-white font-bold bg-black shadow-lg cursor-pointer mt-2">Add Expense</button>
        </form>
        </div>
        </div>
    );
};

export default ExpenseForm;
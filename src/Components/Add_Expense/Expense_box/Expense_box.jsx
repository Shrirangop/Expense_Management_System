import React from "react";
import { GiExpense } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import axios from "axios";

export default function Expense_box(props) {

    console.log(props.title);

    const handleDelete = () => {
        try {
            axios.delete(`http://localhost:4000/Expense/`,{
                title:props.title,
                amount:props.amount,
                date:props.date
            }).then((res) => {
                if (res.status == 200) {
                    const { message } = res.data;
                    console.log(message);
                    if (message) {
                        alert("Expense deleted successfully");
                        window.location.reload();
                    }
                    else {
                        alert("Failed to delete expense");
                    }
                }
            })
        }
        catch (err) {
            console.log(err);
        }
    }

    
    return (
        <div className="expense_box w-full h-1/6 flex justify-between items-center border-b-2 border-b-black border-b-solid border-opacity-50 shadow-lg rounded-lg">
            <GiExpense size={50} classname="px-2"></GiExpense>
            <div className="expense_name w-2/5/5 h-full flex items-center justify-center text-blue-900 font-bold text-xl">
                {props.name}
            </div>
            <div className="expense_value w-1/5 h-full flex items-center justify-center">
                  <span className = "flex items-center justify-center text-xl font-bold text-red-600"><FaRupeeSign /> {props.value}</span>
            </div>
            <div className="expense_date w-1/5 h-full flex items-center justify-center text-green-600 font-bold text-xl">
                {props.date}
            </div>

            <MdUpdate  size={40} className="cursor-pointer"/>
           
            <MdDelete size={40} className="cursor-pointer" onClick={handleDelete}/>
        </div>
    )
}
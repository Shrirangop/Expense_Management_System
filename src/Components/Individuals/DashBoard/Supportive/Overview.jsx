import React from "react";
import "./overview.css";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";

const Overview = ()=>{
    return(
        <div className="overview   border-2 border-solid border-gray-500 rounded-xl p-4 custom shadow-xl">
            <div className="heading text-3xl  text-center border-b-black border-opacity-10 py-3 custom_heading border-b-solid border-b-2 font-bold tracking-tight">
                Overview
            </div>

            <div className="body flex flex-row justify-around items-center mt-2 h-4/5">
                <div className="income custom_card  border-black border-opacity-80 border-solid border-2 rounded-2xl shadow-xl bg-orange-200 flex flex-col justify-start items-center ">
                    <div className="earning flex justify-evenly items-center w-4/5 h-2/5 border-b-2 border-b-black border-b-solid border-opacity-50">
                        <span className = "text-2xl font-bold"> Your Income </span>
                        <div className="dropdown flex justify-evenly items-center border-solid border-black rounded-lg border-2 w-auto h-auto border-opacity-10 text-opacity-30">
                            Month
                            <IoIosArrowDropdown size = {20} color="black" /> 
                        </div>
                    </div>

                    <div className="value text-5xl font-extrabold flex justify-center items-center w-4/5 h-3/5">
                    <FaRupeeSign /> 50000
                    </div>
                </div>
                <div className="expenses custom_card  border-black border-opacity-80 border-solid border-2 rounded-2xl shadow-xl bg-violet-300 flex flex-col justify-start items-center">
                <div className="earning flex justify-evenly items-center w-4/5 h-2/5 border-b-2 border-b-black border-b-solid border-opacity-50">
                        <span className = "text-2xl font-bold"> Your Spendings </span>
                        <div className="dropdown flex justify-evenly items-center border-solid border-black rounded-lg border-2 w-auto h-auto border-opacity-10 text-opacity-30">
                            Month
                            <IoIosArrowDropdown size = {20} color="black" /> 
                        </div>
                    </div>

                    <div className="value text-5xl font-extrabold flex justify-center items-center w-4/5 h-3/5">
                    <FaRupeeSign /> 30000
                    </div>
                </div>
                <div className="Top Expense custom_card  border-black border-opacity-80 border-solid border-2 rounded-2xl shadow-xl ">
                    
                </div>


            </div>
        </div>
    )
}

export default Overview;
import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { GiExpense } from "react-icons/gi";
import { BsBank } from "react-icons/bs";
import { SiGoogleanalytics } from "react-icons/si";
import { FiTarget } from "react-icons/fi";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";



const Navigation = ()=>{
    return(
        <>
            <div className="nav h-full w-1/6 bg-black flex flex-col justify-center items-center">
                
                    <div className="profile text-white text-xl text-center w-full h-1/5 flex justify-evenly items-center cursor-pointer ">
                    
                    <FaCircleUser size = {50} />
                        <Link to = "/Profile">Profile</Link>
                    
                    </div>

                    <div className="navs flex flex-col justify-center items-center w-full h-4/5">
                    <div className="Dashboard text-white text-xl text-center w-full h-1/6 flex justify-evenly items-center cursor-pointer">
                    
                    <RxDashboard />
                     <Link to = "/Individual" >   Dashboard  </Link>
                    </div>

                    <div className="Add_Expense text-white text-xl text-center w-full h-1/6 flex justify-evenly items-center cursor-pointer">
                    <GiExpense />
                     <Link to = "/Expense">Add Expense</Link>
                    </div>

                    <div className="Add_Bank text-white text-xl text-center w-full h-1/6 flex justify-evenly items-center cursor-pointer">
                    <BsBank />
                         <Link to = "/Bank_Account"> Add Bank Account</Link>
                    </div>

                    <div className="Analytics text-white text-xl text-center w-full h-1/6 flex justify-evenly items-center cursor-pointer">
                    <SiGoogleanalytics />
                    <Link to = "/Analytics">    Analytics  </Link>
                    </div>
 
                    <div className="Targets text-white text-xl text-center w-full h-1/6 flex justify-evenly items-center cursor-pointer">
                    <FiTarget />
                         <Link to = "/Targets"> Targets</Link>
                    </div>

                    <div className="Update_profile text-white text-xl text-center w-full h-1/6 flex justify-evenly items-center cursor-pointer">
                    <RxUpdate />
                          <Link>Update Profile</Link>
                    </div>
                    </div>

                  
            
            </div>
        </>
    )
}


export default Navigation;

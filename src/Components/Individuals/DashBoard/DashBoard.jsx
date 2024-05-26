import React from "react";
import Navigation from "./Navigation";
import Overview from "./Supportive/Overview";
import Expense_list from "./Supportive/Expense_list";
import Statistics from "./Supportive/Statistics";


const DashBoard = ()=>{
    return(
        <>
            <div className="container bg-white h-full w-full flex justify-center items-start">
                <Navigation/>
                <div className="dashboard h-full w-5/6 flex flex-col justify-center items-center">
                    <Overview></Overview>
                    <div className="rest h-1/2 w-full flex  flex-row justify-around items-center">
                    <Expense_list></Expense_list>
                    <Statistics></Statistics>

                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default DashBoard;
import React from "react";
import { Link } from "react-router-dom";
import vector from "./exp1.png";
import { TypeAnimation } from 'react-type-animation';
import Navbar from '/src/Components/Navbar/Navbar';

const Landingpage = () => {
    return (

        <>
            <Navbar />
            <div className="h-screen w-screen p-0 m-0  flex flex-row justify-center items-center">
                
                <div className="infobox h-1/2 w-1/3 flex flex-col justify-center items-center ">
                    <div classname="w-full h-auto border-b-4 text-right flex flex-col justify-center items-center border-b-white border-solid">
                        <h1 className="text-8xl text-white font-500 text-left">EXPENSE</h1>
                        <br />
                    </div>

                    <h1 className="text-5xl text-center text-blue-500  "> MANAGEMENT SYSTEM</h1>

                    <div className="textbox w-full h-auto flex justify-center items-center mt-4">
                        <p className="text-blue-400 text-justify text-2xl ">
                            <TypeAnimation
                                sequence={[
                                    "Manage Expenses",
                                    1000,
                                    "Analyze Finances",
                                    1000,
                                    "Fine tune Spendings",
                                    1000,
                                ]}
                                speed={50}
                                repeat={Infinity}
                                style={{ fontSize: '2em' }}
                            />
                        </p>
                    </div>
                    <div className="h-1/6 w-full mt-6 rounded-md text-white flex justify-center items-centerS">
                        <button type="button" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... h-full w-1/4 ">
                            <Link to  = "/Login_Form">Get Started</Link>
                        </button>
                      
                    </div>


                </div>
                <img src={vector} alt="Vector" className="h-1/2 w-1/2" />

            </div>
        </>

    )
}

export default Landingpage;
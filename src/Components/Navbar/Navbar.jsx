import React from "react";
import { Link } from "react-router-dom";


const Navbar = ()=>{
    return(
        
        <nav className="navbar flex justify-around items-center">
            <ul className = "flex justify-around items-center w-screen h-1/4 mt-10 text-2xl font-bold text-blue-300"> 
                <li><img src="" alt="" /></li>
                <li><Link to = "/DashBoard">Home</Link></li>
                <li><Link to = "/Individual">For Individuals</Link></li>
                <li><Link to  = "/Business">For Businesses</Link></li>
                <li><Link to = "/Login_Form">Log in</Link></li>

            </ul>
        </nav>

)
}

export default Navbar
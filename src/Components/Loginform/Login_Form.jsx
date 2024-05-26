import React from "react";
import {Link,useNavigate} from "react-router-dom"
import "./flex.css"
import { useState } from "react";
import axios from "axios";
// import 'dotenv/config';



/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Login_form() {

  const Backend_URI = "http://127.0.0.1:4000";

    const  [Email, setEmail] = useState("");
    const [Password,setPassword] = useState("");
    const navigate = useNavigate();

     const  handleSubmit = async(e) =>{
        e.preventDefault();

        try{

        await axios.post(`http://localhost:4000/login`,{
          email:Email,
          password:Password
        
        }).then((res)=>{
          if(res.status==200){
          const {isUserPresent:isUserexist} = res.data;
          console.log(res.data);
          if(isUserexist){
            navigate("/Individual");
          }
          else{
            alert("Please check your credentials");
          }
        }

        // else alert("internal server error");
        })
      }
      catch(err){
        console.log(err);
      }

        
        // navigate("/Home")
  
        console.log(Email,Password);
    }

  const HandleEmail = (e)=>{
      // console.log(e);
      setEmail(e.target.value);
  }

  const HandlePassword = (e)=>{
    // console.log(e.target.value);
    setPassword(e.target.value);
  }

    const clickHandler = ()=>{
        
        setshowemailinput(false)
    }

    
    const clickHandler1 = ()=>{
        
        setshowpassinput(false)
    }

    const [showemailinput,setshowemailinput] = useState(true)
    const [showpassinput,setshowpassinput] = useState(true)


    const emailbox = (
        <div onClick={clickHandler} className="rounded-md shadow-sm border-b-4 text-white border-white cursor-text">
            Email Address
        </div>
    )

    const passbox = (
        <div onClick = {clickHandler1} className="rounded-md shadow-sm border-b-4 text-white border-white cursor-text">
            Password
        </div>
    )

    const emailinput = (
        <div >
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
          Email Address
        </label>
        <div className="mt-2">
          <input
            id="email"
            onChange = {HandleEmail}
            name="email"
            type="email"
            autoComplete="email"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    )

    const passinput = (
        <div >
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
            Password
          </label>
      
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            onChange = {HandlePassword}
            type="password"
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    )
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <div className="customf h-auto w-1/4  px-6 py-12 lg:px-8 bg-white rounded-3xl  bg-opacity-10">
        
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
           
            <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-white">
              Sign in 
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
                {showemailinput?emailbox:emailinput}
        
                {showpassinput?passbox:passinput}
             
            <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </a>
          </div>
              <div>
                <button
                  type="submit"
                  onClick = {handleSubmit}
                  className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-xl text-white">
            Not a member?<span className = "text-xl text-white font-bold"><Link to = "/Signup_Form">Sign Up</Link></span>
              
            </p>
          </div>
        </div>
     
        </div>
      </>
    )
  }

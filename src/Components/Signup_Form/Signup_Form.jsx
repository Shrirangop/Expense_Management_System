import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

export default function Signup_form() {
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [date, setdate] = useState("");
  // const [gender, setgender] = useState("");
  const [Number, setNumber] = useState(0);



  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();


    console.log(Email, Password, date, Number, Name);

    try {
      await axios.post(`http://localhost:4000/Sign_up`, {
        email: Email,
        password: Password,
        Phone_Number: Number,
        name: Name
      }).then((res) => {
        if (res.status == 200) {
          const { message } = res.data;
          console.log(message);
          if (message) {
            alert("User registered successfully");
            navigate("/Login_form");
          }
          else {
            alert("Failed to register user");
          }
        }
      })
    }
    catch(err){
      console.log(err);
    }

   
  }

  const HandleEmail = (e) => {
    // console.log(e);
    setEmail(e.target.value);
  }

  const Handledate = (e) => {
    // console.log(e.target.value);
    setdate(e.target.value);
  }

  const HandleName = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  }

  const HandlePassword = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  }

  const HandleNumber = (e) => {
    setNumber(e.target.value);
  }


  return (
    <>

      <div className="container w-1/4 h-3/4 bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
        <div className="Heading border-solid border-b-2 border-black w-4/5 h-auto mb-2">
          <h1 className="text-3xl text-black font-100">Registration Form</h1>
        </div>
        <form onSubmit={handleSubmit} className="h-auto w-full flex flex-col justify-around items-center mt-2" >

          <div className="name text-left flex flex-col text-lg justify-center w-4/5 h-auto m-2">
            Name:<br />
            <input type="text" onChange={HandleName} required className="bg-white border-inset border-2 w-full h-auto" placeholder="Name" />
          </div>
          <div className="email text-left flex flex-col text-lg justify-center w-4/5 h-auto m-2">
            Email Address:<br />
            <input type="email" onChange={HandleEmail} required className="bg-white border-inset border-2 w-full h-auto " placeholder="Email" />
          </div>
          <div className="number text-left flex flex-col text-lg justify-center w-4/5 h-auto m-2">
            Phone Number:<br />
            <input type="number" onChange={HandleNumber} required className="bg-white border-inset border-2 w-full h-auto " placeholder="Phone Number" />
          </div>
          <div className="password text-left flex flex-col text-lg justify-center w-4/5 h-auto m-2">
            Password:<br />
            <input type="password" onChange={HandlePassword} id='pwd' required className="bg-white border-inset border-2 w-full h-auto " placeholder="Password" />
          </div>
          <div className="dob text-left flex flex-col text-lg justify-center w-4/5 h-auto m-2">
            Date of Birth:<br />
            <input type="date" onChange={Handledate} className="bg-white border-inset border-2 w-full h-auto " placeholder="dd-mm-yyyy" />
          </div>
          <div className="button mt-2 bg-blue-600 w-4/5 h-1/2 text-white text-2xl">
            <button type="submit" className="w-full h-full">Register</button>
          </div>
        </form>
      </div>
      {/* <div className="alternate mt-4 w-1/4 flex justify-center items center h-1/5">
            <div className="google w-4/5 h-1/5 m-4 bg-white border-inset shadow-md text-lg font-100">
              <button className = "w-full h-full flex justify-around items-center">
              <FcGoogle />
              </button>
            </div>
    
            <div className="facebook w-4/5 h-2/5 m-4 bg-white border-inset shadow-md text-xl font-100">
              <button>
                
              </button>
            </div>
          </div> */}
    </>
  );
}
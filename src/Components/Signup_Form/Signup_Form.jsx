import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";

  import { Link,useNavigate } from "react-router-dom";
  import {useState} from  'react';
   
  export default function Signup_form() {
    const  [Email, setEmail] = useState("");
    const [Name,setName] = useState("");
    const [Password,setPassword] = useState("");
    const [date,setdate] = useState("");
    const [gender,setgender] = useState("");



    const navigate = useNavigate();

     const  handleSubmit = (e) =>{
        e.preventDefault();
        
  
        console.log(Email,Password,date,gender,Name);
        navigate("/")
    }

  const HandleEmail = (e)=>{
      // console.log(e);
      setEmail(e.target.value);
  }

  const Handledate = (e)=>{
    // console.log(e.target.value);
    setdate(e.target.value);
  }

  const HandleName = (e)=>{
    // console.log(e.target.value);
    setName(e.target.value);
  }

  const HandlePassword = (e)=>{
    // console.log(e.target.value);
    setPassword(e.target.value);
  }

  const Handlegender = (e)=>{
    // console.log(e.target.value);
    setgender(e.target.value);
  }
    return (
       <Card color="gray" shadow={true} >
        <div className="text-3xl text-center">
        <Typography variant="h1" color="white" >
          Sign Up
        </Typography>
        </div>
       
        
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="white" className="-mb-3">
              Your Name
            </Typography>
            <Input
            onChange={HandleName}
              size="md"
              placeholder="Name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-black"
           
            />
            </div>
            <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="white" className="-mb-3">
              Your Email
            </Typography>
            <Input
            onChange={HandleEmail}
            type = "email"
              size="md"
              placeholder="Email"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-black"
             
            />
            </div>
             <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="white" className="-mb-3">
              Date of Birth
            </Typography>
            <Input
            onChange={Handledate}
            type = "date"
              size="md"
              placeholder="DOB"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-black"
            
            />
            </div>
             <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="white" className="-mb-3">
              Gender
            </Typography>
            <Input
            onChange={Handlegender}
            type = "text"
              size="md"
              placeholder="Your Gender"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-black"
             
            />
            <Typography variant="h6" color="white" className="-mb-3">
              Password
            </Typography>
            <Input
            onChange = {HandlePassword}
              type="password"
              size="md"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-black"
           
            />
          </div>
          
          <Button  onClick ={handleSubmit}  className="mt-6 bg-blue-600" fullWidth>
            Sign Up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-white">
              <Link to = "/">Sign In</Link>
            </a>
          </Typography>
        </form>
      </Card>
    );
  }
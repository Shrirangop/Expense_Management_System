const user = require("../Models/userModel");

const registerController = async (req,res)=>{
    const {name,email,Phone_Number,password} = req.body;
    try {
        const newUser = new user({
            name,email,Phone_Number,password
        });
        console.log(newUser);
        await newUser.save();
        res.status(200).json({message:"User registered successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Failed to register user"});
    }
}

const loginController = async (req,res)=>{
    const {email,password} = req.body;
    console.log(email,password);
    try {
        const existingUser = await user.findOne(
            {email : email,
            password : password}
        );

        console.log(existingUser);

        if(existingUser){
            res.status(200).json({isUserPresent:true});
        }
        else{
            res.status(404).json({isUserPresent:false});
    }
}
    catch (error) {
        res.status(500).json({message:"Login failed"});
    }
}

module.exports = {registerController,loginController};
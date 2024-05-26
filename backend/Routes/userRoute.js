const express = require("express");
const { registerController, loginController } = require("../Controllers/userController");


const router = express.Router();

router.get("/",(req,res)=>{
    console.log(req.body);
    res.send("Hello from server");
});

router.post("/Sign_up",registerController);
router.post("/login",loginController);

module.exports = router;
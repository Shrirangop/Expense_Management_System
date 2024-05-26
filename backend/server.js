
require('dotenv').config();

const express = require("express");
const cors = require("cors");

const userRoute = require("./Routes/userRoute");
const expenseRoute = require("./Routes/expenseRoute")

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.use(cors());


app.use("/",userRoute);
app.use("/Expense",expenseRoute);



const connectDB = require("./connection");

connectDB();

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});





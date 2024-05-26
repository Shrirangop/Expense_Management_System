const mongoose = require("mongoose");
const { FaBullseye } = require("react-icons/fa6");

const expenseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    amount:{
        type:Number,
        required:true
    },
    currency:{
        type:String,
        required:false
    },
    
    date:{
        type:Date,
        required:true
    }
},{
    timestamps:true,
});

module.exports = mongoose.model("Expense",expenseSchema);
const expense = require("../Models/expenseModel");

const addExpense = async (req,res)=>{
    const {title,amount,date} = req.body;
    try {
        const newExpense = new expense({
            title,amount,date
        });
        await newExpense.save();
        res.status(200).json({message:"Expense added successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Failed to add expense"});
    }
}


const getExpense = async (req,res)=>{
    
    try {
        const expenses = await expense.find();
        // console.log(expenses);
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({message:"Failed to get expenses"});
    }
}

const deleteExpense = async(req,res)=>{
    const {title,amount,date} = req.body;

    try {
        console.log(req.body);
        await expense.findOneAndDelete({title,amount,date})
        res.status(200).json({message:"Expense deleted successfully"});
    } catch (error) {
        res.status(500).json({message:"Failed to delete expense"});
    }
}

module.exports = {addExpense,getExpense,deleteExpense};
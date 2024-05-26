const express = require("express");

const {addExpense,getExpense,deleteExpense} = require("../Controllers/expenseController")

const router = express.Router();

router.get("/",getExpense);
router.post("/",addExpense);
router.delete("/",deleteExpense);

module.exports = router;
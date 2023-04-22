import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterByYear = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear
  });

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          defaultYear={filteredYear}
          expenseFilterYear={filterByYear}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </li>
  );
};

export default Expense;

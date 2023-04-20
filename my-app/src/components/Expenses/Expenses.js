import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterByYear = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear
  });

  let expensesFiltered = <p>No expenses found.</p>

  if (filteredExpenses.length > 0) {
    expensesFiltered =  filteredExpenses.map((expense => 
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
    ))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          defaultYear={filteredYear}
          expenseFilterYear={filterByYear}
        />
        {expensesFiltered}
      </Card>
    </div>
  );
};

export default Expense;

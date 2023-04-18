import NewExpense from "./components/NewExpenses/NewExpense";
import React, { useState } from 'react'
import Expense from './components/Expenses/Expenses.js'

const InitialExpenses = [
  {
    id: "e1",
    title: "Toilet paper",
    date: new Date(2021, 4, 4),
    amount: 10,
  },
  {
    id: "e2",
    title: "Milk",
    date: new Date(2022, 4, 5),
    amount: 5,
  },
  {
    id: "e3",
    title: "Bread",
    date: new Date(2023, 4, 6),
    amount: 12,
  },
  {
    id: "e4",
    title: "Peanut Butter",
    date: new Date(2020, 4, 7),
    amount: 20,
  },
];

const App = () => {

  const [expenses, addExpenses] = useState(InitialExpenses);

  const addExpenseHandler = expense => {
    console.log(expense)
    addExpenses([expense, ...expenses])
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;

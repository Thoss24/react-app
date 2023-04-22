import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentAmount, setCurrentAmount] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  const [isExpenseDisplaying, setExpenseDisplaying] = useState(false);

  const titleChangeHandler = (event) => {
    setCurrentTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setCurrentAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setCurrentDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: currentTitle,
      amount: +currentAmount,
      date: new Date(currentDate),
    };

    setCurrentTitle('');
    setCurrentAmount('');
    setCurrentDate('');
    props.onSaveExpenseData(expenseData) // triggering onSaveExpenseData which was initialized inside ExpenseForm, passing in new expense item
    setExpenseDisplaying(false)
  };

  const handleOpenExpenseDisplay = () => {
    setExpenseDisplaying(true)
  };

  const handleCloseExpenseDisplay = () => {
    setExpenseDisplaying(false)
  };

  let expenseForm = (
    <button onClick={handleOpenExpenseDisplay}>Add New Expense</button>
  )

  if (isExpenseDisplaying) {
    expenseForm = (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={currentTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              value={currentAmount}
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2000-01-01"
              value={currentDate}
              max="2023-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={handleCloseExpenseDisplay}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
        </form>
    );
  }

  return (
    <div>
      {expenseForm}
    </div>
    
  );
};

export default ExpenseForm;

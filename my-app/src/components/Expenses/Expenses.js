import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import './Expenses.css'

const Expense = (props) => {

  const [filteredYear, setFilteredYear] = useState('2023');

  const filterByYear = (year) => {
    console.log(year)
    console.log("Yes, it's working!")

    let expenseItemsYears = props.items.map((x) => {return x['date'].getFullYear() }); // Variable which holds the year for each expense item

    console.log(expenseItemsYears)

    setFilteredYear(year)
  };

  return (
    <div>
    <Card className="expenses">
    <ExpenseFilter defaultYear={filteredYear} expenseFilterYear={filterByYear}/>
      <ExpenseItem
        title={props.items[0].title}
        date={props.items[0].date}
        amount={props.items[0].amount}
      />
      <ExpenseItem
        title={props.items[1].title}
        date={props.items[1].date}
        amount={props.items[1].amount}
      />
      <ExpenseItem
        title={props.items[2].title}
        date={props.items[2].date}
        amount={props.items[2].amount}
      />
      <ExpenseItem
        title={props.items[3].title}
        date={props.items[3].date}
        amount={props.items[3].amount}
      />
    </Card>
    </div>
  );
}

export default Expense;

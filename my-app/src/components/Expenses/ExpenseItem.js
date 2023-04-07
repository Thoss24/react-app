import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'

const ExpenseItem = (prop) => { // only one root element allowed per statement/JSX code snippet

  const [title, changeTitle] = useState(prop.title)
 
  const clickHandler = () => {
    changeTitle('Changed');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={prop.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">{prop.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

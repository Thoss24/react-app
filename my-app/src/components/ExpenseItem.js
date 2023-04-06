import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css'

function ExpenseItem(prop) { // only one root element allowed per statement/JSX code snippet
 
  return (
    <Card className="expense-item">
      <ExpenseDate date={prop.date}/>
      <div className="expense-item__description">
        <h2>{prop.title}</h2>
      </div>
      <div className="expense-item__price">{prop.amount}</div>
    </Card>
  );
}

export default ExpenseItem;

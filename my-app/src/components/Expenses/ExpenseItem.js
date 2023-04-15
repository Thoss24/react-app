import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'

const ExpenseItem = (prop) => { // only one root element allowed per statement/JSX code snippet

  return (
    <Card className="expense-item">
      <ExpenseDate date={prop.date}/>
      <div className="expense-item__description">
        <h2>{prop.title}</h2>
      </div>
      <div className="expense-item__price">{prop.amount}</div>
      <button >Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

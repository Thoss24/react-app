import './ExpenseItem.css'

function ExpenseItem(prop) { // only one root element allowed per statement/JSX code snippet
 
  return (
    <div className="expense-item">
      <div>{prop.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{prop.title}</h2>
      </div>
      <div className="expense-item__price">{prop.amount}</div>
    </div>
  );
}

export default ExpenseItem;

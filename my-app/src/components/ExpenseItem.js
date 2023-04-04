import './ExpenseItem.css'

function ExpenseItem(prop) { // only one root element allowed per statement/JSX code snippet
  const day = prop.date.toLocaleString("en-UK", { day: "2-digit"});
  const month = prop.date.toLocaleString("en-UK", { month: "long"});
  const year = prop.date.getFullYear();
 
  return (
    <div className="expense-item">
      <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{prop.title}</h2>
      </div>
      <div className="expense-item__price">{prop.amount}</div>
    </div>
  );
}

export default ExpenseItem;

import './ExpenseDate.css'

function ExpenseDate(prop) {
    const day = prop.date.toLocaleString("en-UK", { day: "2-digit"});
    const month = prop.date.toLocaleString("en-UK", { month: "long"});
    const year = prop.date.getFullYear();

    return (
        <div className="expense-date">
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
      </div>
    )
}

export default ExpenseDate
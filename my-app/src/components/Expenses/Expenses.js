import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import './Expenses.css'

const Expense = (props) => {
  return (
    <div>
    <Card className="expenses">
    <ExpenseFilter />
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

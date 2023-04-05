import ExpenseItem from "./components/ExpenseItem";
import App from "../App";

function Expense(prop) {
   

    return (
      <div>
        <ExpenseItem title={prop} />
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
      </div>
    )
}

export default Expense

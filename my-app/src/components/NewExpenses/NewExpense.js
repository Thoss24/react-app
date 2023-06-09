import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (passedInExpenseData) => {
        const expenseData = {
            ...passedInExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
   
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    )
}

export default NewExpense
import Expense from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const App = () => {
  const expenses = [
    {
      title: "Toilet paper",
      date: new Date(2023, 4, 4),
      amount: 10,
    },
    {
      title: "Milk",
      date: new Date(2023, 4, 5),
      amount: 5,
    },
    {
      title: "Bread",
      date: new Date(2023, 4, 6),
      amount: 12,
    },
    {
      title: "Peanut Butter",
      date: new Date(2023, 4, 7),
      amount: 20,
    },
  ];

  const addExpenseHandler = expense => {
    console.log("In App.js")
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expense items={expenses} />
    </div>
  );
}

export default App;

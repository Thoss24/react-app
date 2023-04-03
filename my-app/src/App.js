import ExpenseItem from "./components/ExpenseItem";

function App() {
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        date={expenses[2].date}
        amount={expenses[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        date={expenses[3].date}
        amount={expenses[3].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;

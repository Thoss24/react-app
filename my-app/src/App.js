import Expense from "./components/Expenses/Expenses";

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
      <Expense items={expenses} />
    </div>
  );
}

export default App;

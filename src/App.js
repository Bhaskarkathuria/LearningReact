// import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Card from './components/Card'

function App() {
  const expenses = [
    {
      id: 1,
      title: "car insuranse",
      amount: 1000,
      date: new Date(2023, 7, 15),
    },
    {
      id: 2,
      title: "movie",
      amount: 50,
      date: new Date(2023, 7, 25),
    },
    {
      id: 3,
      title: "medical",
      amount: 500,
      date: new Date(2023, 5, 5),
    },
    {
      id: 4,
      title: "house rent",
      amount: 300,
      date: new Date(2023, 7, 30),
    },
  ];
  return (
    <Card className="App">
      <h1>Lets Get Started!</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default App;

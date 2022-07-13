
import { useState } from "react";
import Expense from "./Component/Expenseslist/expense";
import expenses from "./Component/Expenseslist/expenselist"; //list of expenses
import NewExpense from "./Component/NewExpense/newExpense";
function App() {

  const [exp, setexp] = useState(expenses);
  //This function is used to collect Data of New Expense from Form
  const ExpenseDataCollector = (enteredData) => {

    setexp([enteredData, ...exp])



  }

  return (

    <div>

      {/* This consiste of NewExpense which consiste of NewExpense Form       */}
      <NewExpense OnSaveEnteredData={ExpenseDataCollector} />

      {/* This consiste of the table of different Expense */}
      <Expense item={exp} />

    </div>
  );
}

export default App;

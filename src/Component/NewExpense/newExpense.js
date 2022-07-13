import "./newExpense.css";
import { useState } from "react";
import ExpenseForm from "./expenseForm";

function NewExpense(props) {

    //We use this function to extract the Entered data from the form and also adding a random id to the Expense data argument will passed through ExpenseForm by props
    const ExpenseDataCollector = (entereddata) => {
        const ExpenseData = {
            id: Math.random().toString(),
            ...entereddata

        }

        //We are passing to the parent component(App.js) by props 
        props.OnSaveEnteredData(ExpenseData);


    }

    const [res, setres] = useState(false);
    const resultpass = () => {
        setres(true);
    }
    const resultpassfromexpenseForm = (passeddata) => {
        setres(passeddata);
    }

    return (
        <div className="new-expense">
            {/* collecting the data from expenseForm */}
            {res === true && <ExpenseForm OnSaveEnteredData={ExpenseDataCollector} passingres={res} gettingres={resultpassfromexpenseForm} />}
            {
                res === false && <button onClick={resultpass}>Add Expense</button>
            }

        </div>
    );
}

export default NewExpense;
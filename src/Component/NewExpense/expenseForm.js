import { useState } from "react";
import "./expenseForm.css"  //Importing the Css


function ExpenseForm(props) {

    //We use this useState to collect the title,amount,date
    const [enteredtitle, setenteredtitle] = useState('');
    const [enteredamount, setenteredamount] = useState('');
    const [entereddate, setentereddate] = useState('');

    //onchange function for title
    const takeinputtilte = (event) => {
        setenteredtitle(event.target.value);
    }

    //onChange function for amount
    const takeinputamount = (event) => {
        setenteredamount(event.target.value);
    }

    //onChange Function fro date
    const takeinputdate = (event) => {
        setentereddate(event.target.value);
    }

    //onSubmit function 
    const submitfrom = (event) => {
        event.preventDefault(); //it will prevent from the refresh of the website after we submit

        //The ExpenseData that we Input is Stored here as object
        const ExpensesData = {
            title: enteredtitle,
            amount: parseInt(enteredamount),
            date: new Date(entereddate)
        };

        //We are passing the ExpenseData enterd detail to the newExpense js Throught props
        props.OnSaveEnteredData(ExpensesData);

        //To clear the input field
        setenteredtitle('');
        setenteredamount('');
        setentereddate('');

    }

    const resultpass = () => {

        props.gettingres(false);

    }


    return (
        // onsubmit the from it will activate the form
        <form onSubmit={submitfrom}>

            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredtitle} onChange={takeinputtilte} />
                    {/* We use Value for reset the empty value to the input after we click the expense*/}
                    {/* OnChange is use to activate when ever there is we are adding somthing in the input */}
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredamount} onChange={takeinputamount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2018-01-01" max="2024-12-31" value={entereddate} onChange={takeinputdate} />
                </div>

            </div>
            <div className="new-expense__actions">
                <button onClick={resultpass}>Cancel</button>
                <button type="submit">Add Expense </button>
            </div>

        </form>
    );
}

export default ExpenseForm;
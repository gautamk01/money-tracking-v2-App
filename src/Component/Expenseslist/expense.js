import Card from "../card-sec/Card";
import { useState } from "react";
import ExpenseItem from "../Expensesitem/Expensesitem";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import "./expense.css";
import ExpenseChart from "../Chart/ExpenseChart";

function Expense(props) {

    //TO make the default date to 2020
    const [FilterDate, setFilterDate] = useState('2020')
    const Dateselector = selectedDate => {
        setFilterDate(selectedDate);
    }

    const filterexpense = props.item.filter(expense => {
        return expense.date.getFullYear() === parseInt(FilterDate);
    });


    return (
        // using the card-sec Card.js We can wrap the expense all together so That the Card Css will be also effect this is just for reduce duplicity
        <Card className="expenses">


            {/* Expense Filter is use to filter the perticular date task or tracker */}
            <ExpensesFilter selectedDate={FilterDate} onSaveDateSelector={Dateselector} />
            {/* The chart will be placed on this position */}
            {/* filterexpense will be passed to the ExpenseChart through props.expenses */}
            <ExpenseChart expenses={filterexpense} />
            {/* This is the task list box */}
            {filterexpense.length === 0 && <p className="Empty_result">It is Empty Here🤨</p>}
            {filterexpense.length > 0 &&
                filterexpense.map((expense, index) => (
                    <ExpenseItem key={index}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} />

                ))}




        </Card >
    );
}

export default Expense;
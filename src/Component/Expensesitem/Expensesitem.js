
import "./Expenseitem.css";
import ExpenseDate from "../date/ExpenseDate";
import Card from "../card-sec/Card";
function ExpenseItem(props) {



    return (
        //This section is also covered with Card css to get the same effect of round corner
        <Card className="expense-item">

            {/* This Compoent will do the Date styling part of task */}
            <ExpenseDate date={props.date} />

            {/* This is the item__description section of the task box             */}
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                {/* This will show the Expense item price  */}
                <div className="expense-item__price">${props.amount}</div>
            </div>

        </Card>
    );
}

export default ExpenseItem;
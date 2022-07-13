import Chart from "./chart";

function ExpenseChart(props) {
    const chardatapoint = [
        { label: 'jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
    ];

    for (const expense1 of props.expenses) {
        const expMonth = expense1.date.getMonth();
        console.log(expense1.date.getMonth());

        chardatapoint[expMonth].value += expense1.amount;
    }


    return (<Chart datapoint={chardatapoint} />)
}

export default ExpenseChart;
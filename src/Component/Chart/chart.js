import './chart.css';
import Chartbar from './ChartBar';

function Chart(props) {
    //This will create a array of datapoint
    const datapointValues = props.datapoint.map(datapoint1 => datapoint1.value);
    const totalMaximum = Math.max(...datapointValues);
    console.log(datapointValues);


    return (<div className='chart'>
        {
            props.datapoint.map((datapoint2, index) =>
                <Chartbar key={index}
                    value={datapoint2.value}
                    maxvalue={totalMaximum}
                    label={datapoint2.label} />)
        }
    </div>)

}

export default Chart;

import "./card.css"

function Card(props) {
    const classes = 'cards ' + props.className; // to add className of the p
    return (

        //adding all the element to the div which we wrap up using the Card for that we use props.children
        <div className={classes}>{props.children}
        </div>
    );

}

export default Card;
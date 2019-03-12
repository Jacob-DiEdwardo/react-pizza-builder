import React from 'react';
import classes from './SelectedTopping.module.css';

const selectedTopping = (props) => {
    return (
        <div className={classes.SelectedTopping} onClick={() => props.clicked(props.value)}>
            <div className={classes.toppingName}>{props.toppingName}</div>
            <div className={classes.Symbol}>x</div>
        </div>
    );
}
 
export default selectedTopping;
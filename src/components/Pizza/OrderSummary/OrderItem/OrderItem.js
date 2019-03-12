import React from 'react';

import classes from './OrderItem.module.css';
import Aux from '../../../../hoc/Auxiliary/Auxiliary';

const orderItem = (props) => {
    const toppingsList = props.toppings.map(topping => {
        return <li key={topping}>{topping}</li>
    });

    return (
        <Aux>
            <div className={classes.OrderItem}>
                <div className={classes.Heading}>
                    <div className={classes.Price}>${props.pizzaPrice.toFixed(2)}</div>
                    <div 
                        className={classes.Symbol}
                        onClick={() => props.clicked(props.index)}>x</div>
                </div>
                <ul>
                    {toppingsList}
                </ul>
            </div>
        </Aux>
    );
}
 
export default orderItem;
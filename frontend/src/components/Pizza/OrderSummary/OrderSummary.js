import React from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './OrderSummary.module.css';
import OrderItem from './OrderItem/OrderItem';
import Button from '../../UI/Button/Button';

const orderSummary = ( props ) => {
    const orderItems = props.cart.map(pizza => {
        return <OrderItem 
                    key={props.cart.indexOf(pizza)}
                    index={props.cart.indexOf(pizza)}
                    toppings={pizza.toppings}
                    pizzaPrice={pizza.price}
                    clicked={props.removePizza} />;
    });

    return (
        <Aux>
            <h2 className={classes.Title}>Your Delicious Order!</h2>
            <div className={props.overflow ? classes.OrderItemsOverflow : null}>
                {orderItems}
            </div>
            <div className={classes.Summary}>
                <h3><strong>Total Price: ${props.totalPrice}</strong></h3>
                <div className={classes.ButtonSection}>
                    <Button clicked={props.goBack} btnType={'Danger'}>Back</Button>
                    <Button clicked={props.continue} btnType={'Success'}>Continue</Button>
                </div>
            </div>
        </Aux>
    );
};
 
export default orderSummary;
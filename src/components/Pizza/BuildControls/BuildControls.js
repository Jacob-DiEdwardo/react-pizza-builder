import React from 'react';

import classes from './BuildControls.module.css';
import SelectedTopping from './SelectedTopping/SelectedTopping';

const buildControls = (props) => {
    let availableToppingsList = Object.keys(props.toppings)
        .map(igKey => {
            return [...Array(props.toppings[igKey])].map(ing => {
                return ing.isAvailable ? 
                    <option 
                        key={ing.name} 
                        value={ing.name}>{ing.label}
                    </option> : null;
            })
        });

    let selectedToppings = Object.keys(props.toppings)
        .map(igKey => {
            return [...Array(props.toppings[igKey])].map(ing => {
                return ing.isSelected ? 
                    <SelectedTopping 
                        clicked={props.removeTopping} 
                        key={ing.name} 
                        toppingName={ing.label} 
                        value={ing.name} /> : null;
            })
        });

    return (
        <div>
            <div className={classes.ControlSection}>
                <h3>Current Price = <strong>${props.price.toFixed(2)}</strong></h3>
                <div className={classes.SelectedToppingsSection}>
                    {selectedToppings}
                </div>
                <select onChange={props.toppingSelected}>
                    <option> - Select - </option>
                    {availableToppingsList}
                </select>
            </div>
            <div className={classes.ButtonSection}>
                <button onClick={props.saved}>ADD TO CART</button>
                <button onClick={props.ordering}>CHECKOUT</button>
            </div>
        </div>
    );
}
 
export default buildControls;


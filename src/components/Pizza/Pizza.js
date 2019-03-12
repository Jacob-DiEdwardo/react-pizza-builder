import React from 'react';

import classes from './Pizza.module.css';
import PizzaTopping from './PizzaTopping/PizzaTopping';

const pizza = (props) => {
    let selectedToppings = Object.keys(props.toppings)
        .map(igKey => {
            return [...Array(props.toppings[igKey])].map(ing => {
                return ing.isSelected ? <PizzaTopping key={igKey} type={ing.name} /> : null;
            });
        })
    
    return (
        <div className={classes.Pizza}>
            <PizzaTopping type='crust'>
                <PizzaTopping type='sauce'>
                    <PizzaTopping type='cheese'>
                        {selectedToppings}
                    </PizzaTopping>
                </PizzaTopping>
            </PizzaTopping>
        </div>
    );
}
 
export default pizza;
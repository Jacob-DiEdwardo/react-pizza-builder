import React from 'react';

import classes from './PizzaTopping.module.css';
import Mushroom from '../../../assets/images/mushroom.png';
import Anchovy from '../../../assets/images/anchovy.png';
import Olive from '../../../assets/images/olive.png';
import Pepper from '../../../assets/images/pepper.png';

const pizzaTopping = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ('crust'):
            ingredient = <div className={classes.Crust}>{props.children}</div>
            break;
        case ('sauce'):
            ingredient = <div className={classes.Sauce}>{props.children}</div>
            break;
        case ('cheese'):
            ingredient = <div className={classes.Cheese}>{props.children}</div>
            break;
        case ('Onions'):
            ingredient = (
                <div className={classes.IngredientLayer}>
                    <div className={classes.Onion1}></div>
                    <div className={classes.Onion2}></div>
                    <div className={classes.Onion3}></div>
                    <div className={classes.Onion4}></div>
                    <div className={classes.Onion5}></div>
                    <div className={classes.Onion6}></div>
                </div>
            )
            break;
        case ('Pepperoni'):
            ingredient = (
                <div className={classes.IngredientLayer}>
                    <div className={classes.Pepperoni1}></div>
                    <div className={classes.Pepperoni2}></div>
                    <div className={classes.Pepperoni3}></div>
                    <div className={classes.Pepperoni4}></div>
                    <div className={classes.Pepperoni5}></div>
                    <div className={classes.Pepperoni6}></div>
                </div>
            )
            break;
        case ('Sausage'):
            ingredient = (
                <div className={classes.IngredientLayer}>
                    <div className={classes.Sausage1}></div>
                    <div className={classes.Sausage2}></div>
                    <div className={classes.Sausage3}></div>
                    <div className={classes.Sausage4}></div>
                    <div className={classes.Sausage5}></div>
                    <div className={classes.Sausage6}></div>
                    <div className={classes.Sausage7}></div>
                    <div className={classes.Sausage8}></div>
                    <div className={classes.Sausage9}></div>
                    <div className={classes.Sausage10}></div>
                </div>
            )
            break;
        case ('Meatball'):
            ingredient = (
                <div className={classes.IngredientLayer}>
                    <div className={classes.Meatball1}></div>
                    <div className={classes.Meatball2}></div>
                    <div className={classes.Meatball3}></div>
                    <div className={classes.Meatball4}></div>
                    <div className={classes.Meatball5}></div>
                    <div className={classes.Meatball6}></div>
                </div>
            )
            break;
        case ('Mushrooms'):
            ingredient = (
                <div className={classes.IngredientLayer}>
                    <div className={classes.Mushroom1}>
                        <img className={classes.MushroomImage} src={Mushroom} alt='mushroom' />
                    </div>
                    <div className={classes.Mushroom2}>
                        <img className={classes.MushroomImage} src={Mushroom} alt='mushroom' />
                    </div>
                    <div className={classes.Mushroom3}>
                        <img className={classes.MushroomImage} src={Mushroom} alt='mushroom' />
                    </div>
                    <div className={classes.Mushroom4}>
                        <img className={classes.MushroomImage} src={Mushroom} alt='mushroom' />
                    </div>
                    <div className={classes.Mushroom5}>
                        <img className={classes.MushroomImage} src={Mushroom} alt='mushroom' />
                    </div>
                    <div className={classes.Mushroom6}>
                        <img className={classes.MushroomImage} src={Mushroom} alt='mushroom' />
                    </div>
                </div>
            )
            break;
        case ('Anchovies'):
            ingredient = (
                <div className={classes.IngredientLayer}>
                    <div className={classes.Anchovy1}>
                        <img className={classes.AnchovyImage} src={Anchovy} alt='anchovy' />
                    </div>
                    <div className={classes.Anchovy2}>
                        <img className={classes.AnchovyImage} src={Anchovy} alt='anchovy' />
                    </div>
                    <div className={classes.Anchovy3}>
                        <img className={classes.AnchovyImage} src={Anchovy} alt='anchovy' />
                    </div>
                    <div className={classes.Anchovy4}>
                        <img className={classes.AnchovyImage} src={Anchovy} alt='anchovy' />
                    </div>
                    <div className={classes.Anchovy5}>
                        <img className={classes.AnchovyImage} src={Anchovy} alt='anchovy' />
                    </div>
                </div>
            )
            break;
        case ('Olives'):
            ingredient = (
                <div className={classes.IngredientLayer}>
                    <div className={classes.Olive1}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                    <div className={classes.Olive2}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                    <div className={classes.Olive3}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                    <div className={classes.Olive4}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                    <div className={classes.Olive5}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                    <div className={classes.Olive6}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                    <div className={classes.Olive7}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                    <div className={classes.Olive8}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                    <div className={classes.Olive9}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                </div>
            )
            break;
        case ('Peppers'):
            ingredient = (
                <div className={classes.IngredientLayer}>
                    <div className={classes.Pepper1}>
                        <img className={classes.PepperImage} src={Pepper} alt='pepper' />
                    </div>
                    <div className={classes.Pepper2}>
                        <img className={classes.PepperImage} src={Pepper} alt='pepper' />
                    </div>
                    <div className={classes.Pepper3}>
                        <img className={classes.PepperImage} src={Pepper} alt='pepper' />
                    </div>
                    <div className={classes.Pepper4}>
                        <img className={classes.PepperImage} src={Pepper} alt='pepper' />
                    </div>
                    <div className={classes.Pepper5}>
                        <img className={classes.PepperImage} src={Pepper} alt='pepper' />
                    </div>
                    <div className={classes.Pepper6}>
                        <img className={classes.PepperImage} src={Pepper} alt='pepper' />
                    </div>
                </div>
            )
            break;
        case ('MeatLover'):
            ingredient = (
                <div className={classes.IngredientLayer}>
                    <div className={classes.Pepperoni1}></div>
                    <div className={classes.Pepperoni2}></div>
                    <div className={classes.Pepperoni3}></div>
                    <div className={classes.Pepperoni4}></div>
                    <div className={classes.Pepperoni5}></div>
                    <div className={classes.Pepperoni6}></div>
                    <div className={classes.Sausage1}></div>
                    <div className={classes.Sausage2}></div>
                    <div className={classes.Sausage3}></div>
                    <div className={classes.Sausage4}></div>
                    <div className={classes.Sausage5}></div>
                    <div className={classes.Sausage6}></div>
                    <div className={classes.Sausage7}></div>
                    <div className={classes.Sausage8}></div>
                    <div className={classes.Sausage9}></div>
                    <div className={classes.Sausage10}></div>
                    <div className={classes.Meatball1}></div>
                    <div className={classes.Meatball2}></div>
                    <div className={classes.Meatball3}></div>
                    <div className={classes.Meatball4}></div>
                    <div className={classes.Meatball5}></div>
                    <div className={classes.Meatball6}></div>
                </div>
            )
            break;
        case ('Veggie'):
            ingredient = (
                <div className={classes.IngredientLayer}>
                    <div className={classes.Mushroom1}>
                        <img className={classes.MushroomImage} src={Mushroom} alt='mushroom' />
                    </div>
                    <div className={classes.Mushroom2}>
                        <img className={classes.MushroomImage} src={Mushroom} alt='mushroom' />
                    </div>
                    <div className={classes.Mushroom3}>
                        <img className={classes.MushroomImage} src={Mushroom} alt='mushroom' />
                    </div>
                    <div className={classes.Mushroom4}>
                        <img className={classes.MushroomImage} src={Mushroom} alt='mushroom' />
                    </div>
                    <div className={classes.Mushroom5}>
                        <img className={classes.MushroomImage} src={Mushroom} alt='mushroom' />
                    </div>
                    <div className={classes.Mushroom6}>
                        <img className={classes.MushroomImage} src={Mushroom} alt='mushroom' />
                    </div>
                    <div className={classes.Onion1}></div>
                    <div className={classes.Onion2}></div>
                    <div className={classes.Onion3}></div>
                    <div className={classes.Onion4}></div>
                    <div className={classes.Onion5}></div>
                    <div className={classes.Onion6}></div>
                    <div className={classes.Olive1}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                    <div className={classes.Olive2}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                    <div className={classes.Olive3}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                    <div className={classes.Olive4}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                    <div className={classes.Olive5}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                    <div className={classes.Olive6}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                    <div className={classes.Olive7}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                    <div className={classes.Olive8}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                    <div className={classes.Olive9}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                    <div className={classes.Pepper1}>
                        <img className={classes.PepperImage} src={Pepper} alt='pepper' />
                    </div>
                    <div className={classes.Pepper2}>
                        <img className={classes.PepperImage} src={Pepper} alt='pepper' />
                    </div>
                    <div className={classes.Pepper3}>
                        <img className={classes.PepperImage} src={Pepper} alt='pepper' />
                    </div>
                    <div className={classes.Pepper4}>
                        <img className={classes.PepperImage} src={Pepper} alt='pepper' />
                    </div>
                    <div className={classes.Pepper5}>
                        <img className={classes.PepperImage} src={Pepper} alt='pepper' />
                    </div>
                    <div className={classes.Pepper6}>
                        <img className={classes.PepperImage} src={Pepper} alt='pepper' />
                    </div>
                </div>
            )
            break;
        case ('Supreme'):
            ingredient = (
                <div className={classes.IngredientLayer}>
                    <div className={classes.Pepperoni1}></div>
                    <div className={classes.Pepperoni2}></div>
                    <div className={classes.Pepperoni3}></div>
                    <div className={classes.Pepperoni4}></div>
                    <div className={classes.Pepperoni5}></div>
                    <div className={classes.Pepperoni6}></div>
                    <div className={classes.Sausage1}></div>
                    <div className={classes.Sausage2}></div>
                    <div className={classes.Sausage3}></div>
                    <div className={classes.Sausage4}></div>
                    <div className={classes.Sausage5}></div>
                    <div className={classes.Sausage6}></div>
                    <div className={classes.Sausage7}></div>
                    <div className={classes.Sausage8}></div>
                    <div className={classes.Sausage9}></div>
                    <div className={classes.Sausage10}></div>
                    <div className={classes.Meatball1}></div>
                    <div className={classes.Meatball2}></div>
                    <div className={classes.Meatball3}></div>
                    <div className={classes.Meatball4}></div>
                    <div className={classes.Meatball5}></div>
                    <div className={classes.Meatball6}></div>
                    <div className={classes.Mushroom1}>
                        <img className={classes.MushroomImage} src={Mushroom} alt='mushroom' />
                    </div>
                    <div className={classes.Mushroom2}>
                        <img className={classes.MushroomImage} src={Mushroom} alt='mushroom' />
                    </div>
                    <div className={classes.Mushroom3}>
                        <img className={classes.MushroomImage} src={Mushroom} alt='mushroom' />
                    </div>
                    <div className={classes.Mushroom4}>
                        <img className={classes.MushroomImage} src={Mushroom} alt='mushroom' />
                    </div>
                    <div className={classes.Mushroom5}>
                        <img className={classes.MushroomImage} src={Mushroom} alt='mushroom' />
                    </div>
                    <div className={classes.Mushroom6}>
                        <img className={classes.MushroomImage} src={Mushroom} alt='mushroom' />
                    </div>
                    <div className={classes.Onion1}></div>
                    <div className={classes.Onion2}></div>
                    <div className={classes.Onion3}></div>
                    <div className={classes.Onion4}></div>
                    <div className={classes.Onion5}></div>
                    <div className={classes.Onion6}></div>
                    <div className={classes.Olive1}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                    <div className={classes.Olive2}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                    <div className={classes.Olive3}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                    <div className={classes.Olive4}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                    <div className={classes.Olive5}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                    <div className={classes.Olive6}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                    <div className={classes.Olive7}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                    <div className={classes.Olive8}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                    <div className={classes.Olive9}>
                        <img className={classes.OliveImage} src={Olive} alt='olive' />
                    </div>
                    <div className={classes.Pepper1}>
                        <img className={classes.PepperImage} src={Pepper} alt='pepper' />
                    </div>
                    <div className={classes.Pepper2}>
                        <img className={classes.PepperImage} src={Pepper} alt='pepper' />
                    </div>
                    <div className={classes.Pepper3}>
                        <img className={classes.PepperImage} src={Pepper} alt='pepper' />
                    </div>
                    <div className={classes.Pepper4}>
                        <img className={classes.PepperImage} src={Pepper} alt='pepper' />
                    </div>
                    <div className={classes.Pepper5}>
                        <img className={classes.PepperImage} src={Pepper} alt='pepper' />
                    </div>
                    <div className={classes.Pepper6}>
                        <img className={classes.PepperImage} src={Pepper} alt='pepper' />
                    </div>
                    <div className={classes.Anchovy1}>
                        <img className={classes.AnchovyImage} src={Anchovy} alt='anchovy' />
                    </div>
                    <div className={classes.Anchovy2}>
                        <img className={classes.AnchovyImage} src={Anchovy} alt='anchovy' />
                    </div>
                    <div className={classes.Anchovy3}>
                        <img className={classes.AnchovyImage} src={Anchovy} alt='anchovy' />
                    </div>
                    <div className={classes.Anchovy4}>
                        <img className={classes.AnchovyImage} src={Anchovy} alt='anchovy' />
                    </div>
                    <div className={classes.Anchovy5}>
                        <img className={classes.AnchovyImage} src={Anchovy} alt='anchovy' />
                    </div>
                </div>
            )
            break;
        case ('Fabio'):
            ingredient = (
                <div className={classes.IngredientLayer}>
                    <div className={classes.Pepperoni1}></div>
                    <div className={classes.Pepperoni2}></div>
                    <div className={classes.Pepperoni3}></div>
                    <div className={classes.Pepperoni4}></div>
                    <div className={classes.Pepperoni5}></div>
                    <div className={classes.Pepperoni6}></div>
                    <div className={classes.Mushroom1}>
                        <img className={classes.MushroomImage} src={Mushroom} alt='mushroom' />
                    </div>
                    <div className={classes.Mushroom2}>
                        <img className={classes.MushroomImage} src={Mushroom} alt='mushroom' />
                    </div>
                    <div className={classes.Mushroom3}>
                        <img className={classes.MushroomImage} src={Mushroom} alt='mushroom' />
                    </div>
                    <div className={classes.Mushroom4}>
                        <img className={classes.MushroomImage} src={Mushroom} alt='mushroom' />
                    </div>
                    <div className={classes.Mushroom5}>
                        <img className={classes.MushroomImage} src={Mushroom} alt='mushroom' />
                    </div>
                    <div className={classes.Mushroom6}>
                        <img className={classes.MushroomImage} src={Mushroom} alt='mushroom' />
                    </div>
                </div>
            )
            break;
        default:
            ingredient = null;
    }
    
    return ingredient;
};
 
export default pizzaTopping;
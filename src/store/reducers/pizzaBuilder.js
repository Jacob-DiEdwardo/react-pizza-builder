import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    pizzaToppings: null,
    price: 8,
    shoppingCart: [],
    totalPrice: 0,
    error: false,
    purchasing: false
};

const addTopping = (state, action) => {
    let selectedToppingName = action.toppingName;
    let pizzaToppingsCopy = {
        ...state.pizzaToppings
    };
    let priceCopy = state.price;
    if (pizzaToppingsCopy[selectedToppingName].isSpecial) {
        pizzaToppingsCopy[selectedToppingName].isSelected = true;
        priceCopy = priceCopy + pizzaToppingsCopy[selectedToppingName].price;
        for (let topping in pizzaToppingsCopy) {
            pizzaToppingsCopy[topping].isAvailable = false;
        }
    } else {
        pizzaToppingsCopy[selectedToppingName].isSelected = true;
        pizzaToppingsCopy[selectedToppingName].isAvailable = false;
        priceCopy = priceCopy + pizzaToppingsCopy[selectedToppingName].price;
        for (let topping in pizzaToppingsCopy) {
            if (pizzaToppingsCopy[topping].isSpecial) {
                pizzaToppingsCopy[topping].isAvailable = false;
            }
        }
    }
    const updatedState = {
        pizzaToppings: pizzaToppingsCopy,
        price: priceCopy
    }
    return updateObject(state, updatedState);
};

const removeTopping = (state, action) => {
    let pizzaToppingsCopy = {
        ...state.pizzaToppings
    }
    let priceCopy = state.price;
    let selectedTopping = pizzaToppingsCopy[action.toppingName];
    if (selectedTopping.isSpecial) {
        selectedTopping.isSelected = false;
        priceCopy = priceCopy - selectedTopping.price;
        for (let topping in pizzaToppingsCopy) {
            pizzaToppingsCopy[topping].isAvailable = true;
        }
    } else {
        selectedTopping.isSelected = false;
        selectedTopping.isAvailable = true;
        priceCopy = priceCopy - selectedTopping.price;
        let numberOfTotalToppings = Object.keys(pizzaToppingsCopy).length;
        let numberOfSelectedToppings = 0;
        for (let topping in pizzaToppingsCopy) {
            if (!pizzaToppingsCopy[topping].isSelected) {
                numberOfSelectedToppings++;
            }
        }
        if (numberOfTotalToppings === numberOfSelectedToppings) {
            for (let topping in pizzaToppingsCopy) {
                pizzaToppingsCopy[topping].isAvailable = true;
            }
        }
    }
    const updatedState = {
        pizzaToppings: pizzaToppingsCopy,
        price: priceCopy
    }
    return updateObject(state, updatedState);
};

const setToppings = (state, action) => {
    console.log(action.toppings);
    return updateObject(state, {
        pizzaToppings: action.toppings,
        price: 8,
        error: false,
        purchasing: false
    });
};

const fetchToppingsFailed = (state, action) => {
    return updateObject(state, {error: true});
};

const addPizzaToCart = (state, action) => {
    alert('This Pizza has been added to your cart!');
    let shoppingCartCopy = [
        ...state.shoppingCart
    ];
    let pizzaToppingsCopy = {
        ...state.pizzaToppings
    };
    let storedToppings = [];
    let storedPrice = state.price;
    for (let topping in state.pizzaToppings) {
        if (state.pizzaToppings[topping].isSelected) {
            storedToppings.push(state.pizzaToppings[topping].label);
        }
    }
    if (storedToppings.length === 0) {
        storedToppings.push('Cheese');
    }
    shoppingCartCopy.push({
        toppings: storedToppings,
        price: storedPrice
    })
    
    for (let topping in pizzaToppingsCopy) {
        pizzaToppingsCopy[topping].isAvailable = true;
        pizzaToppingsCopy[topping].isSelected = false;
    }
    const updatedState = {
        pizzaToppings: pizzaToppingsCopy,
        price: 8,
        shoppingCart: shoppingCartCopy
    }
    return updateObject(state, updatedState);
}

const removePizzaFromCart = (state, action) => {
    let shoppingCartCopy = [
        ...state.shoppingCart
    ];
    let isPurchasing = true;
    shoppingCartCopy.splice(action.index, 1);
    if (shoppingCartCopy.length === 0) {
        isPurchasing = false;
    }
    return updateObject(state, {
        shoppingCart: shoppingCartCopy, 
        purchasing: isPurchasing
    });
}

const purchasing = (state, action) => {
    if (state.shoppingCart.length === 0) {
        alert('Please add a pizza to your cart!');
        return updateObject(state, {purchasing: false});
    }
    return updateObject(state, {purchasing: true});
}

const clearCart = (state, action) => {
    let shoppingCartCopy = {
        ...state.shoppingCart
    };
    shoppingCartCopy = [];
    return updateObject(state, {shoppingCart: shoppingCartCopy});
}

const cancelPurchasing = (state, action) => {
    return updateObject(state, {purchasing: false});
}

const calculateTotalPrice = (state, action) => {
    let prices = [];
    let totalOrderPrice = null;
    let shoppingCartCopy = [
        ...state.shoppingCart
    ];
    for (let pizza in shoppingCartCopy) {
        prices.push(shoppingCartCopy[pizza].price);
    }
    totalOrderPrice = prices.reduce((a, b) => a + b, 0).toFixed(2);
    return updateObject(state, {totalPrice: totalOrderPrice});
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TOPPING: return addTopping(state, action);
        case actionTypes.REMOVE_TOPPING: return removeTopping(state, action);
        case actionTypes.SET_TOPPINGS: return setToppings(state, action);
        case actionTypes.FETCH_TOPPINGS_FAILED: return fetchToppingsFailed(state, action);
        case actionTypes.ADD_PIZZA_TO_CART: return addPizzaToCart(state, action);
        case actionTypes.REMOVE_PIZZA_FROM_CART: return removePizzaFromCart(state, action);
        case actionTypes.PURCHASING: return purchasing(state, action);
        case actionTypes.CLEAR_CART: return clearCart(state, action);
        case actionTypes.CANCEL_PURCHASING: return cancelPurchasing(state, action);
        case actionTypes.CALCULATE_TOTAL_PRICE: return calculateTotalPrice(state, action);
        default: return state;
    }
};

export default reducer;
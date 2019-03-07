import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addTopping = (event) => {
    return {
        type: actionTypes.ADD_TOPPING,
        toppingName: event.target.value
    };
};

export const removeTopping = (name) => {
    return {
        type: actionTypes.REMOVE_TOPPING,
        toppingName: name
    };
};

export const setToppings = (toppings) => {
    return {
        type: actionTypes.SET_TOPPINGS,
        toppings: toppings
    };
};

export const fetchToppingsFailed = () => {
    return {
        type: actionTypes.FETCH_TOPPINGS_FAILED
    };
};

export const initToppings = () => {
    return dispatch => {
        axios.get('/pizzaToppings.json')
            .then(res => {
                dispatch(setToppings(res.data));
            })
            .catch(err => {
                dispatch(fetchToppingsFailed());
            });
    }
}

export const addPizzaToCart = () => {
    return {
        type: actionTypes.ADD_PIZZA_TO_CART
    };
};

export const removePizzaFromCart = (pizzaIndex) => {
    return {
        type: actionTypes.REMOVE_PIZZA_FROM_CART,
        index: pizzaIndex
    }
}

export const purchasing = () => {
    return {
        type: actionTypes.PURCHASING
    }
}

export const clearCart = () => {
    return {
        type: actionTypes.CLEAR_CART
    }
}

export const cancelPurchasing = () => {
    return {
        type: actionTypes.CANCEL_PURCHASING
    }
}

export const calculateTotalPrice = () => {
    return {
        type: actionTypes.CALCULATE_TOTAL_PRICE
    }
}
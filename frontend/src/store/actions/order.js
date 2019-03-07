import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
};

export const purchasePizzaStart = () => {
    return {
        type: actionTypes.PURCHASE_PIZZA_START
    };
};

export const purchasePizzaSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_PIZZA_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchasePizzaFail = (error) => {
    return {
        type: actionTypes.PURCHASE_PIZZA_FAIL,
        error: error
    };
};

export const purchasePizza = (orderData, token) => {
    return dispatch => {
        dispatch(purchasePizzaStart());
        axios.post('/orders.json?auth=' + token, orderData)
            .then(res => {
                dispatch(purchasePizzaSuccess(res.data.name, orderData));
            })
            .catch(err => {
                dispatch(purchasePizzaFail(err));
            });
    };
};

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    };
};

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/orders.json' + queryParams)
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                dispatch(fetchOrdersSuccess(fetchedOrders));
            })
            .catch(err => {
                dispatch(fetchOrdersFail(err));
            })
    };
};
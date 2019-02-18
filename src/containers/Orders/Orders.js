import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import PropTypes from 'prop-types';

class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrders(this.props.token, this.props.userId);
    }
    
    render() { 
        let orders = <Spinner />
        if (!this.props.loading) {
            orders = this.props.orders.sort((a, b) => {
                let c = new Date(a.orderDate);
                let d = new Date(b.orderDate);
                return d-c;
            })
            .map(order => (
                <Order
                    date={order.orderDate}
                    key={order.id} 
                    price={order.price}
                    pizzas={order.pizzas}
                    userData={order.userData} />
            ));
            if (this.props.orders.length === 0) {
                orders = <h2 style={{textAlign: 'center'}}>Please order some pizza!</h2>
            }
        }

        return (  
            <Aux>
                <h1 style={{textAlign: 'center'}}>Your Orders:</h1>
                {orders}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    }
}

Orders.propTypes = {
    orders: PropTypes.array,
    loading: PropTypes.bool,
    token: PropTypes.string,
    userId: PropTypes.string
}
 
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
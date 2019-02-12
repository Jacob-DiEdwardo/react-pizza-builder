import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import OrderSummary from '../../components/Pizza/OrderSummary/OrderSummary';
import ContactData from './ContactData/ContactData';
import * as actions from '../../store/actions/index';
import classes from './Checkout.module.css';

class Checkout extends Component {

    componentDidUpdate() {
        if (this.props.cart.length === 0) {
            this.props.history.push('/pizza-builder');
        }
        this.props.onCalculateTotalPrice();
    }
    
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() { 
        let summary = <Redirect to='/'/>;
        if (this.props.cart) {
            const purchasedRedirect = this.props.purchased ? <Redirect to='/' /> : null;
            summary = (
                <div className={classes.Checkout}>
                    {purchasedRedirect}
                    <div className={classes.OrderSummary}>
                        <OrderSummary 
                            goBack={this.checkoutCancelledHandler}
                            continue={this.checkoutContinuedHandler}
                            cart={this.props.cart}
                            totalPrice={this.props.totalPrc}
                            removePizza={this.props.onRemovePizzaFromCart} />
                    </div>
                    <Route
                        path={this.props.match.path + '/contact-data'}
                        component={ContactData} />
                </div>
            );
        }
        return summary;
    }
}

const mapStateToProps = state => {
    return {
        cart: state.pizzaBuilder.shoppingCart,
        totalPrc: state.pizzaBuilder.totalPrice,
        purchased: state.order.purchased
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRemovePizzaFromCart: (index) => dispatch(actions.removePizzaFromCart(index)),
        onCalculateTotalPrice: () => dispatch(actions.calculateTotalPrice()),
        onPurchaseInit: () => dispatch(actions.purchaseInit())
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Pizza from '../../components/Pizza/Pizza';
import BuildControls from '../../components/Pizza/BuildControls/BuildControls';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Pizza/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

class PizzaBuilder extends Component {

    componentDidMount() {
        this.props.onInitToppings();
    }

    componentDidUpdate() {
        this.props.onCalculateTotalPrice();
    }
    
    purchaseContinueHandler = () => {
        if (this.props.isAuthenticated) {
            this.props.onPurchaseInit();
            this.props.history.push('/checkout');
        } else {
            this.props.history.push('/auth');
        }
    }

    render() { 
        let orderSummary = null;
        let pizza = this.props.err ? <p>Toppings could not be loaded!!</p> : <Spinner />
        if (this.props.toppings) {
            pizza = (
                <Aux>
                    <Pizza toppings={this.props.toppings} />
                    <BuildControls 
                        toppings={this.props.toppings}
                        toppingSelected={this.props.onAddTopping}
                        removeTopping={this.props.onRemoveTopping}
                        price={this.props.prc}
                        ordering={this.props.onPurchasing}
                        saved={this.props.onAddPizzaToCart} />
                </Aux>
            );
            orderSummary = <OrderSummary 
                goBack={this.props.onCancelPurchasing}
                continue={this.purchaseContinueHandler}
                cart={this.props.cart}
                totalPrice={this.props.totalPrc}
                removePizza={this.props.onRemovePizzaFromCart}
                overflow />
        }

        return (
            <Aux>
                <Modal 
                    show={this.props.purchasing}
                    modalClosed={this.props.onCancelPurchasing}>
                    {orderSummary}
                </Modal>
                {pizza}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        toppings: state.pizzaBuilder.pizzaToppings,
        prc: state.pizzaBuilder.price,
        cart: state.pizzaBuilder.shoppingCart,
        totalPrc: state.pizzaBuilder.totalPrice,
        err: state.pizzaBuilder.error,
        purchasing: state.pizzaBuilder.purchasing,
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddTopping: (event) => dispatch(actions.addTopping(event)),
        onRemoveTopping: (name) => dispatch(actions.removeTopping(name)),
        onInitToppings: () => dispatch(actions.initToppings()),
        onAddPizzaToCart: () => dispatch(actions.addPizzaToCart()),
        onRemovePizzaFromCart: (index) => dispatch(actions.removePizzaFromCart(index)),
        onPurchasing: () => dispatch(actions.purchasing()),
        onCancelPurchasing: () => dispatch(actions.cancelPurchasing()),
        onCalculateTotalPrice: () => dispatch(actions.calculateTotalPrice()),
        onPurchaseInit: () => dispatch(actions.purchaseInit())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(PizzaBuilder, axios));
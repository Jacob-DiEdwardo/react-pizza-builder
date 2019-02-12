import React, { Component } from 'react';

import classes from './Order.module.css';

class Order extends Component {
    state = {
        showDetails: false
    }

    toggleDetailsHandler = () => {
        this.setState({showDetails: !this.state.showDetails});
    }

    render() {
        let deliveryMethod = null;
        if (this.props.userData.deliveryMethod === "pickUp") {
            deliveryMethod = "Pick Up";
        } else if (this.props.userData.deliveryMethod === "delivery") {
            deliveryMethod = "Delivery";
        }

        let orderDetails = [];
        for (let pizza in this.props.pizzas) {
            orderDetails.push(
                <li key={pizza}>
                    <ul>
                        <li>Price: ${this.props.pizzas[pizza].price.toFixed(2)}</li>
                        <li>Toppings: {this.props.pizzas[pizza].toppings.join(', ')}</li>
                    </ul>
                    <br />
                </li>
            );
        }
    
        return (
            <div className={classes.Order}>
                <h3>{this.props.date}</h3>
                <p><strong># of Pizzas:</strong> {this.props.pizzas.length} 
                    <span 
                        className={classes.Details} 
                        onClick={this.toggleDetailsHandler}>
                            ({this.state.showDetails ? 'hide' : 'details'})
                    </span>
                </p>
                {this.state.showDetails ? 
                <div>
                    <ol>
                        {orderDetails}
                    </ol>
                </div> : null}
                <p><strong>Total Price:</strong> ${this.props.price}</p>
                <p><strong>Recipient:</strong> {this.props.userData.name}</p>
                <p><strong>Delivery Method:</strong> {deliveryMethod}</p>
                <p><strong>Status:</strong> Pending...</p>
            </div>
        );
    }
}
 
export default Order;
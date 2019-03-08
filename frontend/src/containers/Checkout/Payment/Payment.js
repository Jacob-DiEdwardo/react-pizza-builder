import React, { Component } from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from '../../../shared/stripe';
import PAYMENT_SERVER_URL from '../../../shared/server';

class Payment extends Component {
    dollarToCentHandler = amount => amount * 100;

    onToken = (amount, description) => token =>
        axios.post(PAYMENT_SERVER_URL,
            {
            description,
            source: token.id,
            currency: 'USD',
            amount: this.dollarToCentHandler(amount)
            })
            .then(res => {
                alert('Payment Successful');
                this.props.submitOrder();
            })
            .catch(err => {
                alert('Payment Error');
            });
    
    render () {
        return (
            <StripeCheckout
                name={this.props.name}
                description='Pizza Order'
                amount={this.dollarToCentHandler(this.props.amount)}
                token={this.onToken(this.props.amount, 'Pizza Order')}
                currency='USD'
                stripeKey={STRIPE_PUBLISHABLE}
            />
        );
    }
}

export default Payment;
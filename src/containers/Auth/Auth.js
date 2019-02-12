import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.module.css';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import { updateObject, checkValidity } from '../../shared/utility';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignUp: false
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            })
        });
        this.setState({controls: updatedControls});
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp);
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignUp: !prevState.isSignUp};
        });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                valueType={formElement.config.elementConfig.placeholder}
                changed={(event) => this.inputChangedHandler(event, formElement.id)} />
        ));

        let message = (
            <p>Don't have an account?
                <span 
                    className={classes.Message}
                    onClick={this.switchAuthModeHandler}>Create one!
                </span>
            </p>
        )
        if (this.state.isSignUp) {
            message = (
                <p>Already have an account?
                    <span 
                        className={classes.Message}
                        onClick={this.switchAuthModeHandler}>Sign in!
                    </span>
                </p>
            )
        }

        if (this.props.loading) {
            form = <Spinner />
        }

        let errorMessage = null;
        if (this.props.error) {
            switch(this.props.error.message) {
                case "INVALID_EMAIL": errorMessage = (
                    <p style={{color: 'red'}}>INVALID EMAIL</p>
                );
                break;
                case "EMAIL_NOT_FOUND": errorMessage = (
                    <p style={{color: 'red'}}>EMAIL NOT FOUND</p>
                );
                break;
                case "EMAIL_EXISTS": errorMessage = (
                    <p style={{color: 'red'}}>EMAIL ALREADY EXISTS</p>
                );
                break;
                case "WEAK_PASSWORD : Password should be at least 6 characters": errorMessage = (
                    <p style={{color: 'red'}}>WEAK PASSWORD: Password should be at least 6 characters</p>
                );
                break;
                default: errorMessage = (
                    <p style={{color: 'red'}}>{this.props.error.message}</p>
                );
            }
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to='/pizza-builder' />
        }

        return (
            <div className={classes.Auth}>
                {authRedirect}
                {errorMessage}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType="Success">{this.state.isSignUp ? 'SIGN UP' : 'SIGN IN'}</Button>
                </form>
                {message}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp))
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
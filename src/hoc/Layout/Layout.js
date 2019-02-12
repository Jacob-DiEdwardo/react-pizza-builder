import React, { Component } from 'react';
import { connect } from 'react-redux'

import classes from "./Layout.module.css";
import Aux from '../Auxiliary/Auxiliary';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Navigation/Footer/Footer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() { 
        return (
            <Aux>
                <Navbar 
                    menuButtonClicked={this.sideDrawerToggleHandler}
                    isAuth={this.props.isAuthenticated} />
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <Footer />
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token != null
    };
};
 
export default connect(mapStateToProps)(Layout);
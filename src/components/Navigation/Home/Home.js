import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import classes from './Home.module.css';
import Map from '../../UI/Map/Map';
import Footer from '../Footer/Footer';

class Home extends Component {
    render() {
        let urlPath = null;
        if (this.props.isAuth) {
            urlPath = '/pizza-builder';
        } else {
            urlPath = '/auth';
        }

        return (
            <div className={classes.Home}>
                <div className={classes.Title}>
                    <h1>Welcome to Fabio's!</h1>
                </div>
                <div>
                    <NavLink to={urlPath}>
                        <button>ORDER NOW!</button>
                    </NavLink>
                </div>
                <div>
                    <div className={classes.Information}>
                        <h2>(555) 555-5555</h2>
                        <h3>Hours:</h3>
                        <p>Mon-Thurs 11AM - 10PM</p>
                        <p>Fri-Sat 11AM - 11PM</p>
                        <p>Closed Sunday</p>
                    </div>
                    <div className={classes.Map}>
                        <Map />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null
    }
}
 
export default connect(mapStateToProps)(Home);
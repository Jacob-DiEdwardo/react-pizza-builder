import React from 'react';

import pizzaLogo from '../../assets/images/pizza-logo.png';
import classes from './Logo.module.css';

const logo = () => (
    <div className={classes.Logo}>
        <img src={pizzaLogo} alt="Pizza-Builder" />
    </div>
)
 
export default logo;
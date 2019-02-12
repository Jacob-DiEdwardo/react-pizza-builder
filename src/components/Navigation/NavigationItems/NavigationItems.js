import React from 'react';

import classes from "./NavigationItems.module.css";
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    let navItems = null;
    if (props.isAuthenticated) {
        navItems = (
            <ul className={classes.NavigationItems}>
                <NavigationItem link="/">Home</NavigationItem>
                <NavigationItem link="/pizza-builder">Pizza Builder</NavigationItem>
                <NavigationItem link="/orders">Orders</NavigationItem>
                <NavigationItem link="/logout">Logout</NavigationItem>
            </ul>
        );
    } else {
        navItems = (
            <ul className={classes.NavigationItems}>
                <NavigationItem link="/">Home</NavigationItem>
                <NavigationItem link="/auth">Pizza Builder</NavigationItem>
            </ul>
        );
    }

    return navItems;
};
 
export default navigationItems;
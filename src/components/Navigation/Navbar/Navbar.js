import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from "./Navbar.module.css";
import MenuButton from '../MenuButton/MenuButton';
import Logo from "../../Logo/Logo";
import NavigationItems from '../NavigationItems/NavigationItems';

const navbar = (props) => {

    return (
        <header className={classes.Navbar}>
            <MenuButton clicked={props.menuButtonClicked} />
            <div className={classes.Logo}>
                <NavLink to='/'>
                    <Logo />
                </NavLink>
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems isAuthenticated={props.isAuth} />
            </nav>
        </header>
    );
}
 
export default navbar;
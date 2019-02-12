import React from 'react';

import classes from './Footer.module.css';
import facebookIcon from '../../../assets/images/facebook-icon.png';
import instagramIcon from '../../../assets/images/instagram-icon.png';
import twitterIcon from '../../../assets/images/twitter-icon.png';
import yelpIcon from '../../../assets/images/yelp-icon.png';

const footer = () => (
    <footer className={classes.Footer}>
        <div className={classes.SocialMedia}>
            <a href="/"><img src={facebookIcon} alt="facebook" /></a>
            <a href="/"><img src={instagramIcon} alt="instagram" /></a>
            <a href="/"><img src={twitterIcon} alt="twitter" /></a>
            <a href="/"><img src={yelpIcon} alt="yelp" /></a>
        </div>
        <div className={classes.Copyright}>
            <p>Copyright 2018</p>
        </div>
    </footer>
);
 
export default footer;
import React from 'react';
import classes from './Map.module.css';

const map = () => {
    return (
        <div className={classes.GoogleMap}>
            <iframe 
                frameBorder="0"
                title="map"
                src="https://www.google.com/maps/embed/v1/place?q=11500%20Yamato%20Rd%2C%20Boca%20Raton%2C%20FL%2033498&key=AIzaSyAVh193EPwfgZtLArgwDCAs1MHRl7wDsNY">
            </iframe>
        </div>
    );
}

export default map;
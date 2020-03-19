// Core
import React from 'react';

// Styles
import Styles from './styles.css';

export const Image = (props) => {
    return (
        <div className = { Styles.image }>
            <img src = { props.link } />
        </div>
    );
};

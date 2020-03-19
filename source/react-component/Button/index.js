// Core
import React from 'react';

// Styles
import Styles from './styles.css';

export const Button = (props) => {
    return (
        <button
            className = { Styles.button }
            onClick = { props.onClick }>
            {props.children}
        </button>
    );
};

// Core
import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import Styles from './styles.css';

export const Nav = () => {
    return (
        <nav className = { Styles.nav }>
            <Link to = '/space'>Space</Link>
            <Link to = '/alien'>Alien</Link>
            <Link to = '/jellyfish'>Jellyfish</Link>
        </nav>
    );
};

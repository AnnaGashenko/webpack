// Core
import React from 'react';

// Styles
import Styles from './styles.css';
import alien from './alien.jpg';

// Components
import { Image } from '../Image';

export default () => {
    return (
        <section className = { Styles.alien }>
            <h1>Alien!!!!!!!!!</h1>
            <Image link = { alien } />
        </section>
    );
};

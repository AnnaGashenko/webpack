// Core
import React from 'react';

// Styles
import Styles from './styles.css';
import jellyfish from './jellyfish.jpg';

// Components
import { Image } from '../Image';

export default () => {
    return (
        <section className = { Styles.jellyfish }>
            <h1>jellyfish</h1>
            <Image link = { jellyfish } />
        </section>
    );
};

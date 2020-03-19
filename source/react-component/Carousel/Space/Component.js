// Core
import React from 'react';

// Styles
import Styles from './styles.css';
import space from './space.jpg';

// Components
import { Image } from '../Image';

export default () => {
    return (
        <section className = { Styles.space }>
            <h1>Space</h1>
            <Image link = { space } />
        </section>
    );
};

// Core
import React, { useState, useCallback } from 'react';
import { hot } from 'react-hot-loader/root';

// Styles
import Styles from './postcss.css';
import kitty from './kitty.jpg';
import { ReactComponent as ReactLogoComponent } from './react.svg';
import reactLogo from './react.svg';

import { Button } from '../Button';

const Clicker = () => {
    const [ count, setCount ] = useState(34);

    const increment = useCallback(
        () => void setCount((prevCount) => prevCount + 1),
        [],
    );
    const decrement = useCallback(
        () => void setCount((prevCount) => prevCount - 1),
        [],
    );

    return (
        <section
            className = { Styles.clicker }
            style = {{
                '--mainColor':       'rebeccapurple',
                '--headingFontSize': count + 'px',
            }}>
            <ReactLogoComponent width = { 50 } />
            <img src = { reactLogo } />
            <img src = { kitty } />
            <Button onClick = { increment }>Increment</Button>
            <Button onClick = { decrement }>Decrement</Button>
            <h1>Test: {count}!!!!!</h1>
        </section>
    );
};

export default hot(Clicker);

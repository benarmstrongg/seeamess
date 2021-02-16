import React, { useState, useEffect } from 'react';
import { HEADLINE } from './page1/headlineTranslator';

const yes = 'no';

const MyComponent = ({ title = '', startCount = 2 }) => {
    const [count, setCount] = React.useState(startCount);

    function increment() {
        setCount(count + 1);
    }


    return (
        <div>
            <h1>{title || 'Counter'}</h1>
            <p lang="en">{count}</p>
            <button onClick={increment}>Inc</button>
            <button onClick={() => setCount(0)}>reset</button>
        </div>
    );
}

function MyComponent2(props?) {
    return 'yes freaking sir';
}


export default MyComponent;
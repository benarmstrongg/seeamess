import React, { useState, useEffect } from 'react';
import { HEADLINE } from './page1/headlineTranslator';

const yes = 'no';


type MyComponentProps = ({ yam: { title: string, str: any }, startCount: number })

const MyComponent = ({ yam: { title = '', str }, startCount = 2 }) => {
    const [count, setCount] = useState(startCount || 0);

    function increment() {
        setCount(count + 1);
    }


    return (
        <div>
            <h1>{title || 'Counter'}</h1>
            <p lang="en">{count}</p>
            <button onClick={increment}>Inc</button>
        </div>
    );
}

function MyComponent2(props?) {
    return 'yes freaking sir';
}


export default MyComponent;
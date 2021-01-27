import React, { useState, useEffect } from 'react';
import { HEADLINE } from './page1/headlineTranslator';

const yes = 'no';

function Comp(...args) {
    return new class {
    }
}

type MyComponentProps = ({ yam: { title: string, str: any }, startCount: number })

@Comp('', 8, 8, 8)
class myc {

    myf() { }
}


function myC() {

}

const MyComponent = ({ yam: { title = '', str }, startCount = 2 }) => {
    const [[count, count2], setCount] = useState([startCount || 0, 7]);

    function increment() {
        setCount([count + 1, count2 + 12]);
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
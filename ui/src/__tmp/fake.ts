const projectFiles = {
    "/Users/benarmstrong/Projects/personal/s/__demo/component.tsx":
        "import React, { useState, useEffect } from 'react';\n// import { translateHeadling } from './page1/headlineTranslator';\n\nconst yes = 'no';\n\ntype MyComponentProps = ({ yam: { title: string, str: any }, startCount: number })\n\nconst MyComponent = ({ yam: { title = '', str }, startCount = 2 }) => {\n    const [count, setCount] = useState(startCount || 0);\n\n    function increment() {\n        setCount(count + 1);\n    }\n\n    return (\n        <div>\n            <h1>{title || 'Counter'}</h1>\n            <p lang=\"en\">{count}</p>\n            <button onClick={increment}>Inc</button>\n        </div>\n    );\n}\n\nfunction MyComponent2(props?) {\n    return 'yes freaking sir';\n}\n\nexport { translateHeadling } from './page1/headlineTranslator';\n\nexport default MyComponent;",
    "/Users/benarmstrong/Projects/personal/s/__demo/page1/headlineTranslator.ts":
        "function translateHeadling(healine: string): string {\n    return healine.toUpperCase();\n}\n\nexport { translateHeadling };",
    "/Users/benarmstrong/Projects/personal/s/__demo/page1/homeBanner.jsx":
        "const f1 = function () {\n\n}\n\nfunction f2() {\n\n}\n\nconst f3 = () => { },\n    v1 = 12;\n\n() => { }"
};

const projectConfig = {
    "projectDir": "/Users/benarmstrong/Projects/personal/s/__demo",
    "port": 420
};

const _export = { projectFiles, projectConfig };
export default _export;
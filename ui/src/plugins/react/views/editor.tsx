import { IEditorView } from '../../../types/EditorView';
import { FaReact } from 'react-icons/fa';
import { FunctionDeclaration } from '../../../code/ts-ast-wrapper/kinds/FunctionDeclaration';
import React, { RefObject, useRef, useState } from 'react';
import { useEditor } from '../../../context';
import { ReturnStatement } from '../../../code/ts-ast-wrapper/kinds/ReturnStatement';
import JsxParser from 'react-jsx-parser';
import { JsxElement } from '../../../code/ts-ast-wrapper/kinds/JsxElement';
import { VariableDeclaration } from '../../../code/ts-ast-wrapper/kinds/VariableDeclaration';
import { ASTNode } from '../../../code/ts-ast-wrapper/ASTNode';
import { ArrowFunction } from '../../../code/ts-ast-wrapper/kinds/ArrowFunction';

export const ReactComponentEditorView: IEditorView = () => {
    const [count, setCount] = useState(7);
    const { tsHelper } = useEditor();
    const ast = tsHelper.getAST();
    const render = () => {
        const functionComponent = ast.find((d) => {
            console.log(d);
            if (ASTNode.is(d, VariableDeclaration))
                if (ASTNode.fromNode(d, VariableDeclaration).getNames().includes('MyComponent'))
                    return true;
            return false;
        }, VariableDeclaration);
        console.log(functionComponent);
        const returnStatement = functionComponent?.find({}, ReturnStatement);
        const jsx = returnStatement?.find({}, JsxElement)?.getText();
        console.log(jsx);
        return (
            <JsxParser
                bindings={{
                    count,
                    increment: () => { console.log('inc'); setCount(count + 1) }
                }}
                components={{}}
                jsx={jsx}
                blacklistedAttrs={[]}
            />);
    }

    return (
        <div className="ReactComponentEditor">{render()}</div>
    );
}

ReactComponentEditorView.button = (
    <>
        <FaReact />
        <>&nbsp;React</>
    </>
);
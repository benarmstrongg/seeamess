import React from 'react';
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { Collapsible } from '../../../../Collapsible';
import { ArrowFunction } from '../../../../EditorContainer/ts-ast-wrapper/kinds/ArrowFunction';
import { FunctionExpressionEditor } from './FunctionExpressionEditor';

export const ArrowFunctionEditor: IStatementEditor<ArrowFunction> = ({ node }) => {
    return (
        <div className="ArrowFunctionEditor">
            <Collapsible trigger="Arrow Function">
                <FunctionExpressionEditor node={node.getExpression()} />
            </Collapsible>
        </div>
    )
}   
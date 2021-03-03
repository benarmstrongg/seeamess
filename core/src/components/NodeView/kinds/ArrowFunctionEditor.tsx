import React from 'react';
import { ArrowFunction } from 'ast';
import { IStatementEditor } from "types/StatementEditorProps";
import { Collapsible } from 'components';
import { FunctionExpressionEditor } from 'components/nodeviews';

export const ArrowFunctionEditor: IStatementEditor<ArrowFunction> = ({ node }) => {
    return (
        <div className="ArrowFunctionEditor">
            <Collapsible trigger="Arrow Function">
                <FunctionExpressionEditor node={node.getExpression()} />
            </Collapsible>
        </div>
    )
}   
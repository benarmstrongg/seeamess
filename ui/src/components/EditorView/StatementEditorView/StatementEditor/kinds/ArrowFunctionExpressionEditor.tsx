import React from 'react';
import { ArrowFunctionExpression } from "jscodeshift";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { StatementEditor } from '..';
import { Collapsible } from '../../../../Collapsible';

export const ArrowFunctionExpressionEditor: IStatementEditor<ArrowFunctionExpression> = ({ node }) => {
    const { body } = node;
    return (
        <div className="ArrowFunctionExpressionEditor">
            <Collapsible trigger="Arrow Function">
                <StatementEditor node={body} />
            </Collapsible>
        </div>
    )
}   
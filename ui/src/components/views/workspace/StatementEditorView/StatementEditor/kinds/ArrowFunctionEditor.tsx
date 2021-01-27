import React from 'react';
import { ArrowFunction } from '../../../../../../code/ts-ast-wrapper/kinds/ArrowFunction';
import { IStatementEditor } from "../../../../../../types/StatementEditorProps";
import { Collapsible } from '../../../../../common/Collapsible';
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
import React from "react";
import { NodeView } from "components";
import { BinaryExpression } from "ast";
import { IStatementEditor } from "types/StatementEditorProps";
import { Collapsible } from "components";

export const BinaryExpressionEditor: IStatementEditor<BinaryExpression> = ({ node }) => {
    const validOperators = [
        '!=', '!==', '%', '&', '*', '**',
        '+', '-', '..', '/', '<', '<<', '<=',
        '==', '===', '>', '>=', '>>', '>>>', '^',
        'in', 'instanceof', '|', '||', '??', '&&'
    ];
    return (
        <div className="BinaryExpressionEditor">
            <Collapsible trigger="Binary Expression">
                <NodeView node={node.left} />
                <select defaultValue={node.getOperatorText()}>
                    {validOperators.map(op => (
                        <option key={op} value={op}>{op}</option>
                    ))}
                </select>
                <NodeView node={node.right} />
            </Collapsible>
        </div>
    );
}
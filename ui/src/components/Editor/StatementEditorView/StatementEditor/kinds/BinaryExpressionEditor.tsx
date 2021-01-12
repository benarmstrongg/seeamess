import { BinaryExpression } from "jscodeshift";
import React from "react";
import { StatementEditor } from "..";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { Collapsible } from "../../../../Collapsible";

export const BinaryExpressionEditor: IStatementEditor<BinaryExpression> = ({ node }) => {
    const validOperators: typeof node.operator[] = [
        '!=', '!==', '%', '&', '*', '**',
        '+', '-', '..', '/', '<', '<<', '<=',
        '==', '===', '>', '>=', '>>', '>>>', '^',
        'in', 'instanceof', '|'
    ];
    return (
        <div className="BinaryExpressionEditor">
            <Collapsible trigger="Binary Expression">
                <StatementEditor node={node.left} />
                <select defaultValue={node.operator}>
                    {validOperators.map(op => (
                        <option key={op} value={op}>{op}</option>
                    ))}
                </select>
                <StatementEditor node={node.right} />
            </Collapsible>
        </div>
    );
}
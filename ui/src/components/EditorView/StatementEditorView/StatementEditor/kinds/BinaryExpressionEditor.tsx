import React from "react";
import { StatementEditor } from "..";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { Collapsible } from "../../../../Collapsible";
import { BinaryExpression } from "../../../../EditorContainer/ts-ast-wrapper/kinds/BinaryExpression";

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
                <StatementEditor node={node.left} />
                <select defaultValue={node.getOperatorText()}>
                    {validOperators.map(op => (
                        <option key={op} value={op}>{op}</option>
                    ))}
                </select>
                <StatementEditor node={node.right} />
            </Collapsible>
        </div>
    );
}
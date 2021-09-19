import React from "react";
import { NodeForm, Collapsible } from "../../";
import { BinaryExpression } from "../../../ast";
import { NodeFormComponent } from "../types";

export const BinaryExpressionForm: NodeFormComponent<BinaryExpression> = ({ node }) => {
    const validOperators = [
        '!=', '!==', '%', '&', '*', '**',
        '+', '-', '..', '/', '<', '<<', '<=',
        '==', '===', '>', '>=', '>>', '>>>', '^',
        'in', 'instanceof', '|', '||', '??', '&&'
    ];
    return (
        <div className="BinaryExpressionEditor">
            <Collapsible trigger="Binary Expression">
                <NodeForm node={node.left} />
                <select defaultValue={node.getOperatorText()}>
                    {validOperators.map(op => (
                        <option key={op} value={op}>{op}</option>
                    ))}
                </select>
                <NodeForm node={node.right} />
            </Collapsible>
        </div>
    );
}
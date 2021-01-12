import { LogicalExpression } from "jscodeshift";
import React from "react";
import { StatementEditor } from "..";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { Collapsible } from "../../../../Collapsible";

export const LogicalExpressionEditor: IStatementEditor<LogicalExpression> = ({ node }) => {
    const validOperators: typeof node.operator[] = ['||', '??', '&&'];
    const { left, operator, right } = node;
    const statementEditorProps = { fieldName: '', showTypeField: false };
    return (
        <div className="LogicalExpressionEditor">
            <Collapsible trigger="Logical expression">
                <StatementEditor node={left} {...statementEditorProps} />
                <select defaultValue={operator} style={{ display: 'inline' }}>
                    {validOperators.map(o => (
                        <option key={o} value={o}>{o}</option>
                    ))}
                </select>
                <StatementEditor node={right} {...statementEditorProps} />
            </Collapsible>
        </div>
    )
}
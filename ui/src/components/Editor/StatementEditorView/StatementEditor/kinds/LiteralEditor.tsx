import React from 'react';
import { Literal, NumericLiteral, StringLiteral } from "jscodeshift";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { StatementEditorInput } from '../StatementEditorInput';


export const LiteralEditor: IStatementEditor<Literal | StringLiteral | NumericLiteral> = (props) => {
    const { node, fieldName = '' } = props;
    const { value } = node;
    return (
        <span className="LiteralEditor">
            {fieldName}
            <StatementEditorInput {...props} placeholder={fieldName} node={node} value={value?.toString() || ''} />
        </span>
    )
}
import React from 'react';
import { Identifier } from "jscodeshift";
import { IStatementEditor } from '../../../../../types/StatementEditorProps';
import { StatementEditorInput } from '../StatementEditorInput';
import { StatementEditorTitle } from '../StatementEditorTitle';


export const IdentifierEditor: IStatementEditor<Identifier> = ({ node, fieldName = '' }) => {
    const { name } = node;
    return (
        <span className="IdentifierEditor">
            <StatementEditorTitle text={fieldName} />
            <StatementEditorInput placeholder={fieldName} node={node} value={name} />
        </span>
    )
}
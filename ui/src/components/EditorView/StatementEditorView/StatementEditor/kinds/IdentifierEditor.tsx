import React from 'react';
import { IStatementEditor } from '../../../../../types/StatementEditorProps';
import { Identifier } from '../../../../EditorContainer/ts-ast-wrapper/kinds/Identifier';
import { StatementEditorInput } from '../StatementEditorInput';
import { StatementEditorTitle } from '../StatementEditorTitle';


export const IdentifierEditor: IStatementEditor<Identifier> = ({ node, fieldName = '' }) => {
    return (
        <span className="IdentifierEditor">
            <StatementEditorTitle text={fieldName} />
            <StatementEditorInput placeholder={fieldName} node={node} value={node.text} />
        </span>
    )
}
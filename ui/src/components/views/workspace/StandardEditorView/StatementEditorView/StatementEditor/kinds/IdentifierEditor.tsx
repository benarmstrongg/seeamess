import React from 'react';
import { Identifier } from '../../../../../../../code/ts-ast-wrapper/kinds/Identifier';
import { IStatementEditor } from '../../../../../../../types/StatementEditorProps';
import { ASTNodeInput } from '../../../../../../common/ASTNodeInput';
import { StatementEditorTitle } from '../StatementEditorTitle';


export const IdentifierEditor: IStatementEditor<Identifier> = ({ node, fieldName = '' }) => {
    return (
        <span className="IdentifierEditor">
            <StatementEditorTitle text={fieldName} />
            <ASTNodeInput placeholder={fieldName} node={node} value={node.text} />
        </span>
    )
}
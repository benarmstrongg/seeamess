import React from 'react';
import { Identifier } from "../../../ast";
import { IStatementEditor } from '../../../types/StatementEditorProps';
import { NodeInput } from '../../NodeInput';
import { StatementEditorTitle } from '../StatementEditorTitle';


export const IdentifierEditor: IStatementEditor<Identifier> = ({ node, fieldName = '' }) => {
    return (
        <span className="IdentifierEditor">
            <StatementEditorTitle text={fieldName} />
            <NodeInput placeholder={fieldName} node={node} value={node.text} />
        </span>
    )
}
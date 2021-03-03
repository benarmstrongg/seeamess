import React from 'react';
import { Identifier } from "ast";
import { IStatementEditor } from 'types/StatementEditorProps';
import { NodeInput, NodeViewHeading } from 'components';


export const IdentifierEditor: IStatementEditor<Identifier> = ({ node, fieldName = '' }) => {
    return (
        <span className="IdentifierEditor">
            <NodeViewHeading text={fieldName} />
            <NodeInput placeholder={fieldName} node={node} value={node.text} />
        </span>
    )
}
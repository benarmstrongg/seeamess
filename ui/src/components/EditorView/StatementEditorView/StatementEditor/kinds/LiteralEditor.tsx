import React from 'react';
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { LiteralLikeNode } from '../../../../EditorContainer/ts-ast-wrapper/kinds/LiteralLikeNode';
import { StatementEditorInput } from '../StatementEditorInput';


export const LiteralEditor: IStatementEditor<LiteralLikeNode> = (props) => {
    const { node, fieldName = '' } = props;
    const { text } = node;
    return (
        <span className="LiteralEditor">
            {fieldName}
            <StatementEditorInput {...props} placeholder={fieldName} node={node} value={text} />
        </span>
    )
}
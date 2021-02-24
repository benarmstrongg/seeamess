import React from 'react';
import { LiteralLikeNode } from '../../../ast';
import { IStatementEditor } from "../../../types/StatementEditorProps";
import { NodeInput } from '../../NodeInput';


export const LiteralEditor: IStatementEditor<LiteralLikeNode> = (props) => {
    const { node, fieldName = '' } = props;
    const { text } = node;
    return (
        <span className="LiteralEditor">
            {fieldName}
            <NodeInput {...props} placeholder={fieldName} node={node} value={text} />
        </span>
    )
}
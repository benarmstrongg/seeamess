import React from 'react';
import { LiteralLikeNode } from 'ast';
import { NodeFormComponent } from "../types";
import { NodeInput } from 'components';


export const LiteralForm: NodeFormComponent<LiteralLikeNode> = (props) => {
    const { node, fieldName = '' } = props;
    const { text } = node;
    return (
        <span className="LiteralEditor">
            {fieldName}
            <NodeInput {...props} placeholder={fieldName} node={node} value={text} />
        </span>
    )
}
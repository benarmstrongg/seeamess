import React from 'react';
import { Identifier } from "../../../ast";
import { NodeFormComponent } from '../types';
import { NodeInput, NodeFormHeading } from '../../';


export const IdentifierForm: NodeFormComponent<Identifier> = ({ node, fieldName = '' }) => {
    return (
        <span className="IdentifierEditor">
            <NodeFormHeading text={fieldName} />
            <NodeInput placeholder={fieldName} node={node} value={node.text || node.escapedText.toString()} />
        </span>
    )
}
import React from 'react';
import { ast, ParameterDeclaration } from '../../../ast';
import { NodeFormComponent } from "../types";
import { NodeInput, NodeForm, Collapsible, NodeFormHeading } from '../../';

export const ParameterDeclarationForm: NodeFormComponent<ParameterDeclaration> = ({ node }) => {
    const type = node.getType();

    return (
        <div className="ParameterDeclarationEditor">
            <Collapsible trigger={node.getNamesString()}>
                <div>
                    <NodeFormHeading text="Parameter" />
                </div>
                <div>
                    <NodeFormHeading text="Name" />
                    <NodeForm node={node.name} />
                </div>
                <div>
                    <NodeFormHeading text="Required" />
                    <input type="checkbox" readOnly checked={node.required === true} />
                </div>
                {!!node.type && (
                    <div>
                        <NodeFormHeading text="Type" />
                        <NodeInput placeholder="any" node={ast(node.type)} value={type} />
                    </div>
                )}
                {!!node.initializer && (
                    <div>
                        <NodeFormHeading text="Initializer" />
                        <NodeForm node={node.initializer} />
                    </div>
                )}
            </Collapsible>
        </div>
    )
}
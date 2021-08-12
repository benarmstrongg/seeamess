import { NodeFormComponent } from '../types'
import React from "react";
import { NodeForm, Collapsible, NodeFormHeading } from "components";
import { InterfaceDeclaration } from 'ast';

export const InterfaceDeclarationForm: NodeFormComponent<InterfaceDeclaration> = ({ node }) => {
    const name = node.getName();
    const members = node.getTypeElements();
    const collapsibleHeader = name ? `interface ${name}` : 'Interface Declaration';

    return (
        <div className="InterfaceDeclarationEditor">
            <Collapsible trigger={collapsibleHeader}>
                <div>
                    <NodeFormHeading text="Name" />
                    <NodeForm node={node.name} />
                </div>
                {members.length > 0 && (
                    <div>
                        <NodeFormHeading text="Members" />
                        {members.map(m => (
                            <NodeForm key={m.key} node={m} />
                        ))}
                    </div>
                )}
            </Collapsible>
        </div>
    );
}
import React from "react";
import { PropertySignature } from "../../../ast";
import { NodeFormComponent } from "../types";
import { Collapsible, NodeForm, NodeFormHeading } from "../../";

export const PropertySignatureForm: NodeFormComponent<PropertySignature> = ({ node }) => {
    const typeMembers = node.getTypeMembers();
    const collapsibleHeader = node.getName() || 'Property Signature';
    return (
        <div className="PropertySignatureEditor">
            <Collapsible trigger={collapsibleHeader}>
                <div>
                    <NodeFormHeading text="Name" />
                    <NodeForm node={node.name} />
                </div>
                {!!node.initializer && (
                    <div>
                        <NodeFormHeading text="Initializer" />
                        <NodeForm node={node.initializer} />
                    </div>
                )}
                {!!node.type && (
                    <div>
                        <NodeFormHeading text="Type" />
                        {typeMembers.length > 0 && typeMembers.map(m => (
                            <NodeForm key={m.key} node={m} />
                        ))}
                        {typeMembers.length === 0 && (
                            <NodeForm node={node.type} />
                        )}
                    </div>
                )}
            </Collapsible>
        </div>
    );
}
import React from "react";
import { NodeForm, Collapsible, NodeFormHeading } from "components";
import { TypeAliasDeclaration } from "ast";
import { NodeFormComponent } from "../types";

export const TypeAliasDeclarationForm: NodeFormComponent<TypeAliasDeclaration> = ({ node }) => {
    const collapsibleHeader = `type ${node.getName()}`;
    return (
        <div className="TypeAliasDeclarationEditor">
            <Collapsible trigger={collapsibleHeader}>
                <div>
                    <NodeFormHeading text="Type Alias Declaration" />
                </div>
                <div>
                    <NodeFormHeading text="Name" />
                    <NodeForm node={node.name} />
                </div>
                <div>
                    <NodeFormHeading text="Type" />
                    <NodeForm node={node.type} />
                </div>
            </Collapsible>
        </div>
    );
}
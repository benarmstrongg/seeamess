import React from "react";
import { BindingElement } from "ast";
import { NodeFormComponent } from "../types";
import { Collapsible, NodeForm, NodeFormHeading } from "components";


export const BindingElementForm: NodeFormComponent<BindingElement> = ({ node }) => {

    return (
        <div className="BindingElementEditor">
            <Collapsible trigger={node.getNamesString()}>
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
            </Collapsible>
        </div>
    );
}
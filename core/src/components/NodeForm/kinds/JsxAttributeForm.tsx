import React from "react";
import { NodeForm, Collapsible, NodeFormHeading } from "../../";
import { JsxAttribute } from "../../../ast";
import { NodeFormComponent } from "../types";

export const JsxAttributeForm: NodeFormComponent<JsxAttribute> = ({ node }) => {
    return (
        <div className="JSXAttributeEditor">
            <Collapsible trigger={node.getName()}>
                <div>
                    <NodeFormHeading text="Name" />
                    <NodeForm node={node.name} />
                </div>
                {!!node.initializer && (
                    <div>
                        <NodeFormHeading text="Value" />
                        <NodeForm node={node.initializer} />
                    </div>
                )}
            </Collapsible>
        </div>
    );
}
import React from "react";
import { NodeForm, NodeFormHeading } from "components";
import { JsxOpeningElement } from "ast";
import { NodeFormComponent } from "../types";

export const JsxOpeningElementForm: NodeFormComponent<JsxOpeningElement> = ({ node }) => {
    const attributes = node.getAttributes();
    return (
        <div className="JSXOpeningElementEditor">
            <NodeFormHeading text="Tag Name" />
            <NodeForm node={node.tagName} />
            {attributes.length > 0 && (
                <div>
                    <NodeFormHeading text="Attributes" />
                    {attributes.map(a => (
                        <NodeForm key={a.key} node={a} />
                    ))}
                </div>
            )}
        </div>
    );
}
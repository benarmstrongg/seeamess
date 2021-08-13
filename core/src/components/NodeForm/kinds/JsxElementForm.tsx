import React from "react";
import { NodeForm, Collapsible, NodeFormHeading } from "../../";
import { JsxElement } from "../../../ast";
import { NodeFormComponent } from "../types";

export const JsxElementForm: NodeFormComponent<JsxElement> = ({ node }) => {
    const openingElement = node.getOpeningElement();
    const collapsibleHeader = `<${openingElement.getTagName()}>` || 'JSX Element';
    return (
        <div className="JSXElementEditor">
            <Collapsible trigger={collapsibleHeader}>
                <div>
                    <NodeFormHeading text="JSX Element" />
                </div>
                <NodeForm node={openingElement} />
                <div>
                    <NodeFormHeading text="Children" />
                    {node.getChildElements().map(c => (
                        <NodeForm key={c.key} node={c} />
                    ))}
                </div>
            </Collapsible>
        </div>
    );
}
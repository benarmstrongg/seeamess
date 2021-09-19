import React from "react";
import { JsxText } from "../../../ast";
import { NodeFormComponent } from "../types";
import { Collapsible, NodeInput, NodeFormHeading } from "../../";

export const JsxTextForm: NodeFormComponent<JsxText> = ({ node }) => {
    const collapsibleHeader = node.text || 'JSX Text';
    return (
        <div className="JSXTextEditor">
            <Collapsible trigger={collapsibleHeader}>
                <NodeFormHeading text="JSX Text" />
                <NodeInput placeholder="text" node={node} value={node.text} />
            </Collapsible>
        </div>
    );
}
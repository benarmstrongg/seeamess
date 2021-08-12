import React from "react";
import { NodeForm, NodeFormHeading } from "components";
import { NamedExports } from "ast";
import { NodeFormComponent } from "../types";

export const NamedExportsForm: NodeFormComponent<NamedExports> = ({ node }) => {
    const namedBindings = node.getElements();
    return (
        <div className="NamedExportsEditor">
            <NodeFormHeading text="Named Exports" />
            {namedBindings.map(e => (
                <NodeForm key={e.key} node={e} />
            ))}
        </div>
    );
}
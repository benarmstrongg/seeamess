import React from "react";
import { NodeForm } from "components";
import { ArrayBindingPattern, ObjectBindingPattern } from "ast";
import { NodeFormComponent } from "../types";

export const BindingPatternForm: NodeFormComponent<ArrayBindingPattern | ObjectBindingPattern> =
    ({ node }) => {
        return (
            <div className="BindingPatternEditor">
                {node.getElements().map(e => <NodeForm key={e.key} node={e} />)}
            </div>
        );
    }
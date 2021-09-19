import React from "react";
import { NodeForm, NodeFormHeading } from "../../";
import { ImportClause } from "../../../ast";
import { NodeFormComponent } from "../types";

export const ImportClauseForm: NodeFormComponent<ImportClause> = ({ node }) => {
    const namedBindings = node.getNamedBindings();
    return (
        <div className="ImportSpecifierEditor">
            {!!node.name && (
                <div>
                    <NodeFormHeading text="Default Import" />
                    <NodeForm node={node.name} />
                </div>
            )}
            {!!node.namedBindings && (
                <div>
                    <NodeFormHeading text="Named Imports" />
                    {namedBindings && namedBindings.getElements().map(e => (
                        <NodeForm key={e.key} node={e} />
                    ))}
                </div>
            )}
        </div>
    );
}
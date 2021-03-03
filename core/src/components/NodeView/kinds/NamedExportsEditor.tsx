import React from "react";
import { NodeView, NodeViewHeading } from "components";
import { NamedExports } from "ast";
import { IStatementEditor } from "types/StatementEditorProps";

export const NamedExportsEditor: IStatementEditor<NamedExports> = ({ node }) => {
    const namedBindings = node.getElements();
    return (
        <div className="NamedExportsEditor">
            <NodeViewHeading text="Named Exports" />
            {namedBindings.map(e => (
                <NodeView key={e.key} node={e} />
            ))}
        </div>
    );
}
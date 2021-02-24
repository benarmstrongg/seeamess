import React from "react";
import { NodeView } from "..";
import { NamedExports } from "../../../ast";
import { IStatementEditor } from "../../../types/StatementEditorProps";
import { StatementEditorTitle } from "../StatementEditorTitle";

export const NamedExportsEditor: IStatementEditor<NamedExports> = ({ node }) => {
    const namedBindings = node.getElements();
    return (
        <div className="NamedExportsEditor">
            <StatementEditorTitle text="Named Exports" />
            {namedBindings.map(e => (
                <NodeView key={e.key} node={e} />
            ))}
        </div>
    );
}
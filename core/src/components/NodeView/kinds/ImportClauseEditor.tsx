import React from "react";
import { NodeView } from "../../";
import { ImportClause } from "../../../ast";
import { IStatementEditor } from "../../../types/StatementEditorProps";
import { NodeViewHeading } from "..";



export const ImportClauseEditor: IStatementEditor<ImportClause> = ({ node }) => {
    const namedBindings = node.getNamedBindings();
    return (
        <div className="ImportSpecifierEditor">
            {!!node.name && (
                <div>
                    <NodeViewHeading text="Default Import" />
                    <NodeView node={node.name} />
                </div>
            )}
            {!!node.namedBindings && (
                <div>
                    <NodeViewHeading text="Named Imports" />
                    {namedBindings && namedBindings.getElements().map(e => (
                        <NodeView key={e.key} node={e} />
                    ))}
                </div>
            )}
        </div>
    );
}
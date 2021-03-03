import React from "react";
import { NodeView, NodeViewHeading } from "components";
import { NamespaceExport } from "ast";
import { IStatementEditor } from "types/StatementEditorProps";

export const NamespaceExportEditor: IStatementEditor<NamespaceExport> = ({ node }) => {
    return (
        <div className="NamespaceExportEditor">
            <NodeViewHeading text="name" />
            <NodeView node={node.name} />
        </div>
    )
}
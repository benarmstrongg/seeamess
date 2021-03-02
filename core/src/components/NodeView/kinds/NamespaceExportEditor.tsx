import React from "react";
import { NodeView } from "../../";
import { NamespaceExport } from "../../../ast";
import { IStatementEditor } from "../../../types/StatementEditorProps";
import { NodeViewHeading } from "..";

export const NamespaceExportEditor: IStatementEditor<NamespaceExport> = ({ node }) => {
    return (
        <div className="NamespaceExportEditor">
            <NodeViewHeading text="name" />
            <NodeView node={node.name} />
        </div>
    )
}
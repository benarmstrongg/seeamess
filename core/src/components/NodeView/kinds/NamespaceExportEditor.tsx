import React from "react";
import { NodeView } from "..";
import { NamespaceExport } from "../../../ast";
import { IStatementEditor } from "../../../types/StatementEditorProps";
import { StatementEditorTitle } from "../StatementEditorTitle";

export const NamespaceExportEditor: IStatementEditor<NamespaceExport> = ({ node }) => {
    return (
        <div className="NamespaceExportEditor">
            <StatementEditorTitle text="name" />
            <NodeView node={node.name} />
        </div>
    )
}
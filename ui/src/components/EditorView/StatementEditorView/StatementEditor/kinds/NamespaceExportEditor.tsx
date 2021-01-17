import React from "react";
import { StatementEditor } from "..";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { NamespaceExport } from "../../../../EditorContainer/ts-ast-wrapper/kinds/NamespaceExport";
import { StatementEditorTitle } from "../StatementEditorTitle";

export const NamespaceExportEditor: IStatementEditor<NamespaceExport> = ({ node }) => {
    return (
        <div className="NamespaceExportEditor">
            <StatementEditorTitle text="name" />
            <StatementEditor node={node.name} />
        </div>
    )
}
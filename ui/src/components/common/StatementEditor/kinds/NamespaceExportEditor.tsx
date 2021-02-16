import React from "react";
import { StatementEditor } from "..";
import { NamespaceExport } from "../../../../code/ts-ast-wrapper/kinds/NamespaceExport";
import { IStatementEditor } from "../../../../types/StatementEditorProps";
import { StatementEditorTitle } from "../StatementEditorTitle";

export const NamespaceExportEditor: IStatementEditor<NamespaceExport> = ({ node }) => {
    return (
        <div className="NamespaceExportEditor">
            <StatementEditorTitle text="name" />
            <StatementEditor node={node.name} />
        </div>
    )
}
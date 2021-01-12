import { ImportSpecifier } from "jscodeshift";
import React from "react";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { StatementEditorInput } from "../StatementEditorInput";
import { StatementEditorTitle } from "../StatementEditorTitle";



export const ImportSpecifierEditor: IStatementEditor<ImportSpecifier> = ({ node }) => {
    const { imported } = node;
    return (
        <div className="ImportSpecifierEditor">
            <StatementEditorTitle text="Named Import" />
            <StatementEditorInput placeholder="name" node={imported} value={imported.name} />
        </div>
    );
}
import { ImportDefaultSpecifier } from "jscodeshift";
import React from "react";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { StatementEditorInput } from "../StatementEditorInput";
import { StatementEditorTitle } from "../StatementEditorTitle";



export const ImportDefaultSpecifierEditor: IStatementEditor<ImportDefaultSpecifier> = ({ node }) => {
    const { local } = node;
    return (
        <div className="ImportSpecifierEditor">
            <StatementEditorTitle text="Default Import" />
            {!!local && <StatementEditorInput placeholder="name" node={local} value={local.name || ''} />}
        </div>
    );
}
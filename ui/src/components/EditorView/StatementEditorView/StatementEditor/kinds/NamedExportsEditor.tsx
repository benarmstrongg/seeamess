import React from "react";
import { StatementEditor } from "..";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { NamedExports } from "../../../../EditorContainer/ts-ast-wrapper/kinds/NamedExports";
import { StatementEditorTitle } from "../StatementEditorTitle";

export const NamedExportsEditor: IStatementEditor<NamedExports> = ({ node }) => {
    const namedBindings = node.getElements();
    return (
        <div className="NamedExportsEditor">
            <StatementEditorTitle text="Named Exports" />
            {namedBindings.map(e => (
                <StatementEditor key={e.key} node={e} />
            ))}
        </div>
    );
}
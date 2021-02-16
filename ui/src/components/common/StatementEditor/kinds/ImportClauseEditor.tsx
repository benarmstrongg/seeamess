import React from "react";
import { StatementEditor } from "..";
import { ImportClause } from "../../../../code/ts-ast-wrapper/kinds/ImportClause";
import { IStatementEditor } from "../../../../types/StatementEditorProps";
import { StatementEditorTitle } from "../StatementEditorTitle";



export const ImportClauseEditor: IStatementEditor<ImportClause> = ({ node }) => {
    const namedBindings = node.getNamedBindings();
    return (
        <div className="ImportSpecifierEditor">
            {!!node.name && (
                <div>
                    <StatementEditorTitle text="Default Import" />
                    <StatementEditor node={node.name} />
                </div>
            )}
            {!!node.namedBindings && (
                <div>
                    <StatementEditorTitle text="Named Imports" />
                    {namedBindings && namedBindings.getElements().map(e => (
                        <StatementEditor key={e.key} node={e} />
                    ))}
                </div>
            )}
        </div>
    );
}
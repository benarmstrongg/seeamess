import React from "react";
import { VariableDeclaration } from "jscodeshift";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { getStatementEditorKey, StatementEditor } from "..";
import { Collapsible } from "../../../../Collapsible";
import { StatementEditorTitle } from "../StatementEditorTitle";

export const VariableDeclarationEditor: IStatementEditor<VariableDeclaration> = ({ node }) => {
    const { kind, declarations } = node;
    const validKinds = ['const', 'let', 'var'];
    return (
        <div className="VariableDeclarationEditor">
            <Collapsible trigger="Variable Declaration">
                <label>
                    <StatementEditorTitle text="Kind" />
                    <select defaultValue={kind}>
                        {validKinds.map(k => (
                            <option key={k} value={k}>{k}</option>
                        ))}
                    </select>
                </label>
                <br />
                <StatementEditorTitle text="Declarations" />

                {declarations.map((d, i) => {
                    const collapsibleHeader =
                        (d.type === 'Identifier' && d.name) ||
                        (d.type === 'VariableDeclarator' && d.id.type === 'Identifier' && d.id.name) ||
                        i.toString();
                    return (
                        <Collapsible key={getStatementEditorKey(d, i)} trigger={collapsibleHeader}>
                            <StatementEditor node={d} fieldName="Name" />
                        </Collapsible>
                    )
                })}
            </Collapsible>
        </div>
    );
}
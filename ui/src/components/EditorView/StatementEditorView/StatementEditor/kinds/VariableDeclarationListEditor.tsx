import React from "react";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { Collapsible } from "../../../../Collapsible";
import { StatementEditorTitle } from "../StatementEditorTitle";
import { VariableDeclarationList } from "../../../../EditorContainer/ts-ast-wrapper/kinds/VariableDeclarationList";
import { VariableDeclarationEditor } from "./VariableDeclarationEditor";

export const VariableDeclarationListEditor: IStatementEditor<VariableDeclarationList> = ({ node }) => {
    const declarations = node.getDeclarations();
    const kind = node.getKind();
    const hasMultipleDeclarations = declarations.length > 1;
    const collapsibleHeader = `${kind} ${node.getDeclarationNames()}`;
    const validKinds = ['const', 'let', 'var'];
    return (
        <div className="VariableDeclarationListEditor">
            <Collapsible trigger={collapsibleHeader}>
                {hasMultipleDeclarations && (
                    <div>
                        <StatementEditorTitle text="Variable Declaration List" />
                    </div>
                )}
                <StatementEditorTitle text="Kind" />
                <select defaultValue={kind}>
                    {validKinds.map(k => (
                        <option key={k} value={k}>{k}</option>
                    ))}
                </select>
                <br />
                {hasMultipleDeclarations ? (
                    <>
                        <StatementEditorTitle text="Declarations" />
                        {declarations.map(d => (
                            <VariableDeclarationEditor key={d.key} node={d} />
                        ))}
                    </>
                ) :
                    declarations.map(d => (
                        <VariableDeclarationEditor key={d.key} node={d} isCollapsible={false} />
                    ))}
            </Collapsible>
        </div>
    );
}
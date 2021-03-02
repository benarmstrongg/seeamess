import React from "react";
import { IStatementEditor } from "../../../types/StatementEditorProps";
import { NodeViewHeading } from "..";
import { VariableDeclarationEditor } from "./VariableDeclarationEditor";
import { Collapsible } from "../../";
import { VariableDeclarationList } from "../../../ast";

export const VariableDeclarationListEditor: IStatementEditor<VariableDeclarationList> = ({ node }) => {
    const declarations = node.getDeclarations();
    const kind = node.getKind();
    const hasMultipleDeclarations = declarations.length > 1;
    const collapsibleHeader = `${kind} ${node.getDeclarationNamesString()}`;
    const validKinds = ['const', 'let', 'var'];
    return (
        <div className="VariableDeclarationListEditor">
            <Collapsible trigger={collapsibleHeader}>
                {hasMultipleDeclarations && (
                    <div>
                        <NodeViewHeading text="Variable Declaration List" />
                    </div>
                )}
                <NodeViewHeading text="Kind" />
                <select defaultValue={kind}>
                    {validKinds.map(k => (
                        <option key={k} value={k}>{k}</option>
                    ))}
                </select>
                <br />
                {hasMultipleDeclarations ? (
                    <>
                        <NodeViewHeading text="Declarations" />
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
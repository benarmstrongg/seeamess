import React from "react";
import { ImportDeclaration } from "jscodeshift";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { getStatementEditorKey, StatementEditor } from "..";
import { StatementEditorInput } from "../StatementEditorInput";
import { Collapsible } from "../../../../Collapsible";
import { StatementEditorTitle } from "../StatementEditorTitle";

export const ImportDeclarationEditor: IStatementEditor<ImportDeclaration> = ({ node }) => {
    const { source, specifiers } = node;
    return (
        <div className="ImportDeclarationEditor">
            <Collapsible trigger="Import Declaration">
                <StatementEditorTitle text="Source" />
                <StatementEditorInput placeholder="source" node={node.source} value={source.value?.toString() || ''} />
                <div >
                    <StatementEditorTitle text="Imports" />
                    {specifiers.map((s, i) => (
                        <StatementEditor key={getStatementEditorKey(s, i)} node={s} />
                    ))}
                </div>
            </Collapsible>
        </div>
    );
}
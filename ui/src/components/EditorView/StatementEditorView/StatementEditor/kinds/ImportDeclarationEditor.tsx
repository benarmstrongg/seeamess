import React from "react";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { StatementEditor } from "..";
import { Collapsible } from "../../../../Collapsible";
import { StatementEditorTitle } from "../StatementEditorTitle";
import { ImportDeclaration } from "../../../../EditorContainer/ts-ast-wrapper/kinds/ImportDeclaration";

export const ImportDeclarationEditor: IStatementEditor<ImportDeclaration> = ({ node }) => {
    const collapsibleHeader = `import from '${node.getModuleName()}'` || 'Import Declaration';
    return (
        <div className="ImportDeclarationEditor">
            <Collapsible trigger={collapsibleHeader}>
                <div>
                    <StatementEditorTitle text="Import Declaration" />
                </div>
                <div>
                    <StatementEditorTitle text="Source" />
                    <StatementEditor node={node.moduleSpecifier} />
                </div>
                {!!node.importClause && (
                    <StatementEditor node={node.importClause} />
                )}
            </Collapsible>
        </div>
    );
}
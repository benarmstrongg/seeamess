import React from "react";
import { IStatementEditor } from "../../../../types/StatementEditorProps";
import { StatementEditor } from "..";
import { StatementEditorTitle } from "../StatementEditorTitle";
import { ImportDeclaration } from "../../../../code/ts-ast-wrapper/kinds/ImportDeclaration";
import { Collapsible } from "../../Collapsible";

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
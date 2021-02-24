import React from "react";
import { IStatementEditor } from "../../../types/StatementEditorProps";
import { NodeView } from "..";
import { StatementEditorTitle } from "../StatementEditorTitle";
import { ImportDeclaration } from "../../../ast";
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
                    <NodeView node={node.moduleSpecifier} />
                </div>
                {!!node.importClause && (
                    <NodeView node={node.importClause} />
                )}
            </Collapsible>
        </div>
    );
}
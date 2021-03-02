import React from "react";
import { IStatementEditor } from "../../../types/StatementEditorProps";
import { NodeView } from "../../";
import { NodeViewHeading } from "..";
import { ImportDeclaration } from "../../../ast";
import { Collapsible } from "../../";

export const ImportDeclarationEditor: IStatementEditor<ImportDeclaration> = ({ node }) => {
    const collapsibleHeader = `import from '${node.getModuleName()}'` || 'Import Declaration';
    return (
        <div className="ImportDeclarationEditor">
            <Collapsible trigger={collapsibleHeader}>
                <div>
                    <NodeViewHeading text="Import Declaration" />
                </div>
                <div>
                    <NodeViewHeading text="Source" />
                    <NodeView node={node.moduleSpecifier} />
                </div>
                {!!node.importClause && (
                    <NodeView node={node.importClause} />
                )}
            </Collapsible>
        </div>
    );
}
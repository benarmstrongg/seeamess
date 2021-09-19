import React from "react";
import { NodeFormComponent } from "../types";
import { NodeForm, Collapsible, NodeFormHeading } from "../../";
import { ImportDeclaration } from "../../../ast";

export const ImportDeclarationForm: NodeFormComponent<ImportDeclaration> = ({ node }) => {
    const collapsibleHeader = `import from '${node.getModuleName()}'` || 'Import Declaration';
    return (
        <div className="ImportDeclarationEditor">
            <Collapsible trigger={collapsibleHeader}>
                <div>
                    <NodeFormHeading text="Import Declaration" />
                </div>
                <div>
                    <NodeFormHeading text="Source" />
                    <NodeForm node={node.moduleSpecifier} />
                </div>
                {!!node.importClause && (
                    <NodeForm node={node.importClause} />
                )}
            </Collapsible>
        </div>
    );
}
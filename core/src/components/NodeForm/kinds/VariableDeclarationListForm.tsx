import React from "react";
import { NodeFormComponent } from "../types";
import { VariableDeclarationForm } from "components/nodeviews";
import { Collapsible, NodeFormHeading } from "components";
import { VariableDeclarationList } from "ast";

export const VariableDeclarationListForm: NodeFormComponent<VariableDeclarationList> = ({ node }) => {
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
                        <NodeFormHeading text="Variable Declaration List" />
                    </div>
                )}
                <NodeFormHeading text="Kind" />
                <select defaultValue={kind}>
                    {validKinds.map(k => (
                        <option key={k} value={k}>{k}</option>
                    ))}
                </select>
                <br />
                {hasMultipleDeclarations ? (
                    <>
                        <NodeFormHeading text="Declarations" />
                        {declarations.map(d => (
                            <VariableDeclarationForm key={d.key} node={d} />
                        ))}
                    </>
                ) :
                    declarations.map(d => (
                        <VariableDeclarationForm key={d.key} node={d} isCollapsible={false} />
                    ))}
            </Collapsible>
        </div>
    );
}
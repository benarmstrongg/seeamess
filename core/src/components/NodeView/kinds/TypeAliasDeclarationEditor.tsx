import React from "react";
import { NodeView } from "..";
import { TypeAliasDeclaration } from "../../../ast";
import { IStatementEditor } from "../../../types/StatementEditorProps";
import { Collapsible } from "../../Collapsible";
import { StatementEditorTitle } from "../StatementEditorTitle";

export const TypeAliasDeclarationEditor: IStatementEditor<TypeAliasDeclaration> = ({ node }) => {
    const collapsibleHeader = `type ${node.getName()}`;
    return (
        <div className="TypeAliasDeclarationEditor">
            <Collapsible trigger={collapsibleHeader}>
                <div>
                    <StatementEditorTitle text="Type Alias Declaration" />
                </div>
                <div>
                    <StatementEditorTitle text="Name" />
                    <NodeView node={node.name} />
                </div>
                <div>
                    <StatementEditorTitle text="Type" />
                    <NodeView node={node.type['type']} />
                </div>
            </Collapsible>
        </div>
    );
}
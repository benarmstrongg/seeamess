import React from "react";
import { NodeView, Collapsible, NodeViewHeading } from "components";
import { TypeAliasDeclaration } from "ast";
import { IStatementEditor } from "types/StatementEditorProps";

export const TypeAliasDeclarationEditor: IStatementEditor<TypeAliasDeclaration> = ({ node }) => {
    const collapsibleHeader = `type ${node.getName()}`;
    return (
        <div className="TypeAliasDeclarationEditor">
            <Collapsible trigger={collapsibleHeader}>
                <div>
                    <NodeViewHeading text="Type Alias Declaration" />
                </div>
                <div>
                    <NodeViewHeading text="Name" />
                    <NodeView node={node.name} />
                </div>
                <div>
                    <NodeViewHeading text="Type" />
                    <NodeView node={node.type['type']} />
                </div>
            </Collapsible>
        </div>
    );
}
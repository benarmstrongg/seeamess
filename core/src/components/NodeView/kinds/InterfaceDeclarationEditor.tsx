import { IStatementEditor } from 'types/StatementEditorProps'
import React from "react";
import { NodeView, Collapsible, NodeViewHeading } from "components";
import { InterfaceDeclaration } from 'ast';

export const InterfaceDeclarationEditor: IStatementEditor<InterfaceDeclaration> = ({ node }) => {
    const name = node.getName();
    const members = node.getTypeElements();
    const collapsibleHeader = name ? `interface ${name}` : 'Interface Declaration';

    return (
        <div className="InterfaceDeclarationEditor">
            <Collapsible trigger={collapsibleHeader}>
                <div>
                    <NodeViewHeading text="Name" />
                    <NodeView node={node.name} />
                </div>
                {members.length > 0 && (
                    <div>
                        <NodeViewHeading text="Members" />
                        {members.map(m => (
                            <NodeView key={m.key} node={m} />
                        ))}
                    </div>
                )}
            </Collapsible>
        </div>
    );
}
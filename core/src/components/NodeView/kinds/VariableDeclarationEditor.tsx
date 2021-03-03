import React from 'react';
import { IStatementEditor } from 'types/StatementEditorProps';
import { NodeInput, NodeView, Collapsible, NodeViewHeading } from 'components';
import { ASTNode } from 'ast/ASTNode';
import { VariableDeclaration } from 'ast';

interface VariableDeclarationEditorProps {
    isCollapsible?: boolean;
}

export const VariableDeclarationEditor: IStatementEditor<VariableDeclaration, VariableDeclarationEditorProps> = ({ node, isCollapsible = true }) => {
    const type = node.getType();

    const render = () => (
        <>
            <div>
                <NodeViewHeading text="Name" />
                <NodeView node={node.name} />
            </div>
            {!!node.type && (
                <div>
                    <NodeViewHeading text="Type" />
                    <NodeInput placeholder="any" node={node.type} value={type} />
                </div>
            )}
            {!!node.initializer && (
                <div>
                    <NodeViewHeading text="Initializer" />
                    <NodeView node={ASTNode.from(node.initializer)} />
                </div>
            )}
        </>
    );

    return (
        <div className="VariableDeclarationEditor">
            {isCollapsible === true ? (
                <Collapsible trigger={node.getNamesString()}>
                    {render()}
                </Collapsible>
            ) : render()}
        </div>
    )
}
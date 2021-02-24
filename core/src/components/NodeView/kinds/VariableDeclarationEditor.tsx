import React from 'react';
import { IStatementEditor } from '../../../types/StatementEditorProps';
import { NodeInput } from '../../NodeInput';
import { StatementEditorTitle } from '../StatementEditorTitle';
import { NodeView } from '..';
import { ASTNode } from '../../../ast/ASTNode';
import { VariableDeclaration } from '../../../ast';
import { Collapsible } from '../../Collapsible';

interface VariableDeclarationEditorProps {
    isCollapsible?: boolean;
}

export const VariableDeclarationEditor: IStatementEditor<VariableDeclaration, VariableDeclarationEditorProps> = ({ node, isCollapsible = true }) => {
    const type = node.getType();

    const render = () => (
        <>
            <div>
                <StatementEditorTitle text="Name" />
                <NodeView node={node.name} />
            </div>
            {!!node.type && (
                <div>
                    <StatementEditorTitle text="Type" />
                    <NodeInput placeholder="any" node={node.type} value={type} />
                </div>
            )}
            {!!node.initializer && (
                <div>
                    <StatementEditorTitle text="Initializer" />
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
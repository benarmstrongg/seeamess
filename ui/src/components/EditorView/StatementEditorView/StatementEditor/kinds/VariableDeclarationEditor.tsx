import React from 'react';
import { IStatementEditor } from '../../../../../types/StatementEditorProps';
import { VariableDeclaration } from '../../../../EditorContainer/ts-ast-wrapper/kinds/VariableDeclaration';
import { ASTNode } from '../../../../EditorContainer/ts-ast-wrapper/ASTNode';
import { StatementEditorInput } from '../StatementEditorInput';
import { StatementEditorTitle } from '../StatementEditorTitle';
import { StatementEditor } from '..';
import { Collapsible } from '../../../../Collapsible';

interface VariableDeclarationEditorProps {
    isCollapsible?: boolean;
}

export const VariableDeclarationEditor: IStatementEditor<VariableDeclaration, VariableDeclarationEditorProps> = ({ node, isCollapsible = true }) => {
    const names = node.getNames();
    const type = node.getType();

    const render = () => (
        <>
            <StatementEditorTitle text="Name" />
            <StatementEditorInput placeholder="name" node={ASTNode.fromNode(node.name)} value={names} />
            {!!node.type && (
                <div>
                    <StatementEditorTitle text="Type" />
                    <StatementEditorInput placeholder="any" node={ASTNode.fromNode(node.type)} value={type} />
                </div>
            )}
            {!!node.initializer && (
                <div>
                    <StatementEditorTitle text="Initializer" />
                    <StatementEditor node={ASTNode.fromNode(node.initializer)} />
                </div>
            )}
        </>
    );

    return (
        <div className="VariableDeclarationEditor">
            {isCollapsible === true ? (
                <Collapsible trigger={names}>
                    {render()}
                </Collapsible>
            ) : render()}
        </div>
    )
}
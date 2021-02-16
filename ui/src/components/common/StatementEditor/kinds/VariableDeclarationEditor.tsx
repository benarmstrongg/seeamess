import React from 'react';
import { IStatementEditor } from '../../../../types/StatementEditorProps';
import { ASTNodeInput } from '../../ASTNodeInput';
import { StatementEditorTitle } from '../StatementEditorTitle';
import { StatementEditor } from '..';
import { ASTNode } from '../../../../code/ts-ast-wrapper/ASTNode';
import { VariableDeclaration } from '../../../../code/ts-ast-wrapper/kinds/VariableDeclaration';
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
                <StatementEditor node={node.name} />
            </div>
            {!!node.type && (
                <div>
                    <StatementEditorTitle text="Type" />
                    <ASTNodeInput placeholder="any" node={node.type} value={type} />
                </div>
            )}
            {!!node.initializer && (
                <div>
                    <StatementEditorTitle text="Initializer" />
                    <StatementEditor node={ASTNode.from(node.initializer)} />
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
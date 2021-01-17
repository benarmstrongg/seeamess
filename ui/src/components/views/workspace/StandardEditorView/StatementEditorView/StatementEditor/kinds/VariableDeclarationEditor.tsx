import React from 'react';
import { IStatementEditor } from '../../../../../../../types/StatementEditorProps';
import { ASTNodeInput } from '../../../../../../common/ASTNodeInput';
import { StatementEditorTitle } from '../StatementEditorTitle';
import { StatementEditor } from '..';
import { ASTNode } from '../../../../../../../code/ts-ast-wrapper/ASTNode';
import { VariableDeclaration } from '../../../../../../../code/ts-ast-wrapper/kinds/VariableDeclaration';
import { Collapsible } from '../../../../../../common/Collapsible';

interface VariableDeclarationEditorProps {
    isCollapsible?: boolean;
}

export const VariableDeclarationEditor: IStatementEditor<VariableDeclaration, VariableDeclarationEditorProps> = ({ node, isCollapsible = true }) => {
    const names = node.getNames();
    const type = node.getType();

    const render = () => (
        <>
            <StatementEditorTitle text="Name" />
            <ASTNodeInput placeholder="name" node={ASTNode.fromNode(node.name)} value={names} />
            {!!node.type && (
                <div>
                    <StatementEditorTitle text="Type" />
                    <ASTNodeInput placeholder="any" node={ASTNode.fromNode(node.type)} value={type} />
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
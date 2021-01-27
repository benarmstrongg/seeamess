import React from 'react';
import { StatementEditor } from '..';
import { ASTNode } from '../../../../../../code/ts-ast-wrapper/ASTNode';
import { ParameterDeclaration } from '../../../../../../code/ts-ast-wrapper/kinds/ParameterDeclaration';
import { IStatementEditor } from "../../../../../../types/StatementEditorProps";
import { ASTNodeInput } from '../../../../../common/ASTNodeInput';
import { Collapsible } from '../../../../../common/Collapsible';
import { StatementEditorTitle } from '../StatementEditorTitle';

export const ParameterDeclarationEditor: IStatementEditor<ParameterDeclaration> = ({ node }) => {
    const type = node.getType();

    return (
        <div className="ParameterDeclarationEditor">
            <Collapsible trigger={node.getNamesString()}>
                <div>
                    <StatementEditorTitle text="Parameter" />
                </div>
                <div>
                    <StatementEditorTitle text="Name" />
                    <StatementEditor node={node.name} />
                </div>
                <div>
                    <StatementEditorTitle text="Required" />
                    <input type="checkbox" readOnly checked={node.required === true} />
                </div>
                {!!node.type && (
                    <div>
                        <StatementEditorTitle text="Type" />
                        <ASTNodeInput placeholder="any" node={ASTNode.fromNode(node.type)} value={type} />
                    </div>
                )}
                {!!node.initializer && (
                    <div>
                        <StatementEditorTitle text="Initializer" />
                        <StatementEditor node={node.initializer} />
                    </div>
                )}
            </Collapsible>
        </div>
    )
}
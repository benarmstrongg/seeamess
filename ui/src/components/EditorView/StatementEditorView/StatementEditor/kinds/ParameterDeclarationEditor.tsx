import React from 'react';
import { StatementEditor } from '..';
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { Collapsible } from '../../../../Collapsible';
import { ASTNode } from '../../../../EditorContainer/ts-ast-wrapper/ASTNode';
import { ParameterDeclaration } from "../../../../EditorContainer/ts-ast-wrapper/kinds/ParameterDeclaration";
import { StatementEditorInput } from '../StatementEditorInput';
import { StatementEditorTitle } from '../StatementEditorTitle';

export const ParameterDeclarationEditor: IStatementEditor<ParameterDeclaration> = ({ node }) => {
    const names = node.getNames();
    const type = node.getType();

    return (
        <div className="ParameterDeclarationEditor">
            <Collapsible trigger={names}>
                <div>
                    <StatementEditorTitle text="Parameter" />
                </div>
                <div>
                    <StatementEditorTitle text="Name" />
                    <StatementEditorInput placeholder="name" node={ASTNode.fromNode(node.name)} value={names} />
                </div>
                <div>
                    <StatementEditorTitle text="Required" />
                    <input type="checkbox" readOnly checked={node.required === true} />
                </div>
                {!!node.type && (
                    <div>
                        <StatementEditorTitle text="Type" />
                        <StatementEditorInput placeholder="any" node={ASTNode.fromNode(node.type)} value={type} />
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
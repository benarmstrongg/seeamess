import React from 'react';
import { NodeView } from '..';
import { ASTNode, ParameterDeclaration } from '../../../ast';
import { IStatementEditor } from "../../../types/StatementEditorProps";
import { NodeInput } from '../../NodeInput';
import { Collapsible } from '../../Collapsible';
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
                    <NodeView node={node.name} />
                </div>
                <div>
                    <StatementEditorTitle text="Required" />
                    <input type="checkbox" readOnly checked={node.required === true} />
                </div>
                {!!node.type && (
                    <div>
                        <StatementEditorTitle text="Type" />
                        <NodeInput placeholder="any" node={ASTNode.from(node.type)} value={type} />
                    </div>
                )}
                {!!node.initializer && (
                    <div>
                        <StatementEditorTitle text="Initializer" />
                        <NodeView node={node.initializer} />
                    </div>
                )}
            </Collapsible>
        </div>
    )
}
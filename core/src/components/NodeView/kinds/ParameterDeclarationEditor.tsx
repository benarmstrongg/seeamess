import React from 'react';
import { AST, ParameterDeclaration } from 'ast';
import { IStatementEditor } from "types/StatementEditorProps";
import { NodeInput, NodeView, Collapsible, NodeViewHeading } from 'components';

export const ParameterDeclarationEditor: IStatementEditor<ParameterDeclaration> = ({ node }) => {
    const type = node.getType();

    return (
        <div className="ParameterDeclarationEditor">
            <Collapsible trigger={node.getNamesString()}>
                <div>
                    <NodeViewHeading text="Parameter" />
                </div>
                <div>
                    <NodeViewHeading text="Name" />
                    <NodeView node={node.name} />
                </div>
                <div>
                    <NodeViewHeading text="Required" />
                    <input type="checkbox" readOnly checked={node.required === true} />
                </div>
                {!!node.type && (
                    <div>
                        <NodeViewHeading text="Type" />
                        <NodeInput placeholder="any" node={AST.from(node.type)} value={type} />
                    </div>
                )}
                {!!node.initializer && (
                    <div>
                        <NodeViewHeading text="Initializer" />
                        <NodeView node={node.initializer} />
                    </div>
                )}
            </Collapsible>
        </div>
    )
}
import React from 'react';
import { NodeFormComponent } from '../types';
import { NodeInput, NodeForm, Collapsible, NodeFormHeading } from 'components';
import { ast, VariableDeclaration } from 'ast';

interface VariableDeclarationEditorProps {
    isCollapsible?: boolean;
}

export const VariableDeclarationForm: NodeFormComponent<VariableDeclaration, VariableDeclarationEditorProps> = ({ node, isCollapsible = true }) => {
    const type = node.getType();

    const render = () => (
        <>
            <div>
                <NodeFormHeading text="Name" />
                <NodeForm node={node.name} />
            </div>
            {!!node.type && (
                <div>
                    <NodeFormHeading text="Type" />
                    <NodeInput placeholder="any" node={node.type} value={type} />
                </div>
            )}
            {!!node.initializer && (
                <div>
                    <NodeFormHeading text="Initializer" />
                    <NodeForm node={ast(node.initializer)} />
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
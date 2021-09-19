import React from "react";
import { NodeForm, Collapsible, NodeFormHeading } from "../../";
import { ast, FunctionExpression } from "../../../ast";
import { NodeFormComponent } from "../types";

interface FunctionExpressionEditorProps {
    isTopLevel?: boolean;
}

export const FunctionExpressionForm: NodeFormComponent<FunctionExpression, FunctionExpressionEditorProps> =
    ({ node, isTopLevel }) => {
        const name = node.getName();
        const render = () => (
            <div className="FunctionExpressionEditor">
                {!!name && (
                    <div>
                        <NodeFormHeading text="Name" />
                        <NodeForm node={node.name} />
                    </div>
                )}
                <div>
                    <NodeFormHeading text="Parameters" />
                    {node.getParameters().map(p => (
                        <NodeForm key={p.key} node={ast(p)} />
                    ))}
                </div>
                {!!node.body && (
                    <div>
                        <NodeFormHeading text="Body" />
                        <NodeForm node={ast(node.body)} />
                    </div>
                )}
            </div>
        );
        return isTopLevel ?
            (<Collapsible trigger="Function Expression">{render()}</Collapsible>) :
            render();
    }
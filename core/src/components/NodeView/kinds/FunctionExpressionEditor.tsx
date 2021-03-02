import React from "react";
import { NodeView, Collapsible } from "../../";
import { ASTNode, FunctionExpression } from "../../../ast";
import { IStatementEditor } from "../../../types/StatementEditorProps";
import { NodeViewHeading } from "..";

interface FunctionExpressionEditorProps {
    isTopLevel?: boolean;
}

export const FunctionExpressionEditor: IStatementEditor<FunctionExpression, FunctionExpressionEditorProps> =
    ({ node, isTopLevel }) => {
        const name = node.getName();
        const render = () => (
            <div className="FunctionExpressionEditor">
                {!!name && (
                    <div>
                        <NodeViewHeading text="Name" />
                        <NodeView node={node.name} />
                    </div>
                )}
                <div>
                    <NodeViewHeading text="Parameters" />
                    {node.getParameters().map(p => (
                        <NodeView key={p.key} node={ASTNode.from(p)} />
                    ))}
                </div>
                {!!node.body && (
                    <div>
                        <NodeViewHeading text="Body" />
                        <NodeView node={ASTNode.from(node.body)} />
                    </div>
                )}
            </div>
        );
        return isTopLevel ?
            (<Collapsible trigger="Function Expression">{render()}</Collapsible>) :
            render();
    }
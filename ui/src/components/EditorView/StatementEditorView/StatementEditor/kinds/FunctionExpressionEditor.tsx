import React from "react";
import Collapsible from "react-collapsible";
import { StatementEditor } from "..";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { ASTNode } from "../../../../EditorContainer/ts-ast-wrapper/ASTNode";
import { FunctionExpression } from "../../../../EditorContainer/ts-ast-wrapper/kinds/FunctionExpression";
import { StatementEditorTitle } from "../StatementEditorTitle";

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
                        <StatementEditorTitle text="Name" />
                        <StatementEditor node={node.name} />
                    </div>
                )}
                <div>
                    <StatementEditorTitle text="Parameters" />
                    {node.getParameters().map(p => (
                        <StatementEditor key={p.key} node={ASTNode.fromNode(p)} />
                    ))}
                </div>
                {!!node.body && (
                    <div>
                        <StatementEditorTitle text="Body" />
                        <StatementEditor node={ASTNode.fromNode(node.body)} />
                    </div>
                )}
            </div>
        );
        return isTopLevel ?
            (<Collapsible trigger="Function Expression">{render()}</Collapsible>) :
            render();
    }
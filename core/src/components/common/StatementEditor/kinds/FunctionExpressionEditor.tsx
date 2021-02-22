import React from "react";
import { StatementEditor } from "..";
import { ASTNode } from "../../../../code/ts-ast-wrapper/ASTNode";
import { FunctionExpression } from "../../../../code/ts-ast-wrapper/kinds/FunctionExpression";
import { IStatementEditor } from "../../../../types/StatementEditorProps";
import { Collapsible } from "../../Collapsible";
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
                        <StatementEditor key={p.key} node={ASTNode.from(p)} />
                    ))}
                </div>
                {!!node.body && (
                    <div>
                        <StatementEditorTitle text="Body" />
                        <StatementEditor node={ASTNode.from(node.body)} />
                    </div>
                )}
            </div>
        );
        return isTopLevel ?
            (<Collapsible trigger="Function Expression">{render()}</Collapsible>) :
            render();
    }
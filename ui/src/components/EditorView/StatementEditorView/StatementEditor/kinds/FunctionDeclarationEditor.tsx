import React from "react";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { Collapsible } from "../../../../Collapsible";
import { FunctionDeclaration } from "../../../../EditorContainer/ts-ast-wrapper/kinds/FunctionDeclaration";
import { StatementEditorTitle } from "../StatementEditorTitle";
import { FunctionExpressionEditor } from "./FunctionExpressionEditor";

export const FunctionDeclarationEditor: IStatementEditor<FunctionDeclaration> = ({ node }) => {
    const expression = node.getExpression();
    const name = expression.getName();
    const collapsibleHeader = name ? `function ${name}()` : 'Function Declaration';
    return (
        <div className="FunctionDeclarationEditor">
            <Collapsible trigger={collapsibleHeader}>
                <div>
                    <StatementEditorTitle text="Function Declaration" />
                </div>
                <FunctionExpressionEditor node={expression} />
            </Collapsible>
        </div>
    )
}
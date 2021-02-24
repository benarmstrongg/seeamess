import React from "react";
import { FunctionDeclaration } from "../../../ast";
import { IStatementEditor } from "../../../types/StatementEditorProps";
import { Collapsible } from "../../Collapsible";
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
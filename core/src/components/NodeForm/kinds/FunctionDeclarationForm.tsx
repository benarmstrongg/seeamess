import React from "react";
import { FunctionDeclaration } from "ast";
import { NodeFormComponent } from "../types";
import { Collapsible, NodeFormHeading } from "components";
import { FunctionExpressionForm } from "components/nodeviews";

export const FunctionDeclarationForm: NodeFormComponent<FunctionDeclaration> = ({ node }) => {
    const expression = node.getExpression();
    const name = expression.getName();
    const collapsibleHeader = name ? `function ${name}()` : 'Function Declaration';
    return (
        <div className="FunctionDeclarationEditor">
            <Collapsible trigger={collapsibleHeader}>
                <div>
                    <NodeFormHeading text="Function Declaration" />
                </div>
                <FunctionExpressionForm node={expression} />
            </Collapsible>
        </div>
    )
}
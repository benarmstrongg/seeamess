import React from "react";
import { NodeForm } from "components";
import { ExpressionStatement } from "ast/kinds/ExpressionStatement";
import { NodeFormComponent } from "../types";

export const ExpressionStatementForm: NodeFormComponent<ExpressionStatement> = ({ node }) => (
    <NodeForm node={node.expression} />
);
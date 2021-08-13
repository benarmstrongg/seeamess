import React from "react";
import { NodeForm } from "../../";
import { ExpressionStatement } from "../../../ast";
import { NodeFormComponent } from "../types";

export const ExpressionStatementForm: NodeFormComponent<ExpressionStatement> = ({ node }) => (
    <NodeForm node={node.expression} />
);
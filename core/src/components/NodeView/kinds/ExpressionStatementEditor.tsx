import React from "react";
import { NodeView } from "..";
import { ExpressionStatement } from "../../../ast/kinds/ExpressionStatement";
import { IStatementEditor } from "../../../types/StatementEditorProps";

export const ExpressionStatementEditor: IStatementEditor<ExpressionStatement> = ({ node }) => (
    <NodeView node={node.expression} />
);
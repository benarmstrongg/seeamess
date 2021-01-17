import React from "react";
import { StatementEditor } from "..";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { ExpressionStatement } from "../../../../EditorContainer/ts-ast-wrapper/kinds/ExpressionStatement";

export const ExpressionStatementEditor: IStatementEditor<ExpressionStatement> = ({ node }) => (
    <StatementEditor node={node.expression} />
);
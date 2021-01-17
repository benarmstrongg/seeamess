import React from "react";
import { StatementEditor } from "..";
import { ExpressionStatement } from "../../../../../../../code/ts-ast-wrapper/kinds/ExpressionStatement";
import { IStatementEditor } from "../../../../../../../types/StatementEditorProps";

export const ExpressionStatementEditor: IStatementEditor<ExpressionStatement> = ({ node }) => (
    <StatementEditor node={node.expression} />
);
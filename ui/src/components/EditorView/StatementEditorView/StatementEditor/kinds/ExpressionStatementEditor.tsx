import { ExpressionStatement } from "jscodeshift";
import React from "react";
import { StatementEditor } from "..";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";

export const ExpressionStatementEditor: IStatementEditor<ExpressionStatement> = ({ node }) => {
    return (
        <div>
            <StatementEditor node={node.expression} />
        </div>
    );
}
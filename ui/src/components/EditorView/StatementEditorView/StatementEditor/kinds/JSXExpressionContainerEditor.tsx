import { JSXExpressionContainer } from "jscodeshift";
import React from "react";
import { StatementEditor } from "..";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";

export const JSXExpressionContainerEditor: IStatementEditor<JSXExpressionContainer> = ({ node }) => {
    return (
        <div className="JSXExpressionContainerEditor">
            <StatementEditor node={node.expression} />
        </div>
    )
}
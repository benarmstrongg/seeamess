import { JSXIdentifier } from "jscodeshift";
import React from "react";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { StatementEditorInput } from "../StatementEditorInput";

export const JSXIdentifierEditor: IStatementEditor<JSXIdentifier> = ({ node }) => {
    return (
        <span className="JSXIdentifierEditor">
            <StatementEditorInput placeholder="element" node={node} value={node.name} />
        </span>
    )
}
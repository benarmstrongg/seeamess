import { JSXText } from "jscodeshift";
import React from "react";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { Collapsible } from "../../../../Collapsible";
import { StatementEditorInput } from "../StatementEditorInput";

export const JSXTextEditor: IStatementEditor<JSXText> = ({ node }) => {
    return (
        <div className="JSXTextEditor">
            <Collapsible trigger="JSX Text">
                <StatementEditorInput placeholder="text" node={node} value={node.value} />
            </Collapsible>
        </div>
    );
}
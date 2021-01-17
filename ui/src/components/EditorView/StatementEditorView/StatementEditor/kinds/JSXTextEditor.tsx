import React from "react";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { Collapsible } from "../../../../Collapsible";
import { JsxText } from "../../../../EditorContainer/ts-ast-wrapper/kinds/JsxText";
import { StatementEditorInput } from "../StatementEditorInput";

export const JsxTextEditor: IStatementEditor<JsxText> = ({ node }) => {
    return (
        <div className="JSXTextEditor">
            <Collapsible trigger="JSX Text">
                <StatementEditorInput placeholder="text" node={node} value={node.text} />
            </Collapsible>
        </div>
    );
}
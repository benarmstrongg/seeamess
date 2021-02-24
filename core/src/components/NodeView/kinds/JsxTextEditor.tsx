import React from "react";
import { JsxText } from "../../../ast";
import { IStatementEditor } from "../../../types/StatementEditorProps";
import { NodeInput } from "../../NodeInput";
import { Collapsible } from "../../Collapsible";
import { StatementEditorTitle } from "../StatementEditorTitle";

export const JsxTextEditor: IStatementEditor<JsxText> = ({ node }) => {
    const collapsibleHeader = node.text || 'JSX Text';
    return (
        <div className="JSXTextEditor">
            <Collapsible trigger={collapsibleHeader}>
                <StatementEditorTitle text="JSX Text" />
                <NodeInput placeholder="text" node={node} value={node.text} />
            </Collapsible>
        </div>
    );
}
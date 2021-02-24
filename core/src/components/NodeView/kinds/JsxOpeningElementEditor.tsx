import React from "react";
import { NodeView } from "..";
import { JsxOpeningElement } from "../../../ast";
import { IStatementEditor } from "../../../types/StatementEditorProps";
import { StatementEditorTitle } from "../StatementEditorTitle";

export const JsxOpeningElementEditor: IStatementEditor<JsxOpeningElement> = ({ node }) => {
    const attributes = node.getAttributes();
    return (
        <div className="JSXOpeningElementEditor">
            <StatementEditorTitle text="Tag Name" />
            <NodeView node={node.tagName} />
            {attributes.length > 0 && (
                <div>
                    <StatementEditorTitle text="Attributes" />
                    {attributes.map(a => (
                        <NodeView key={a.key} node={a} />
                    ))}
                </div>
            )}
        </div>
    );
}
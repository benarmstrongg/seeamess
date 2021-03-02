import React from "react";
import { NodeView } from "../../";
import { JsxOpeningElement } from "../../../ast";
import { IStatementEditor } from "../../../types/StatementEditorProps";
import { NodeViewHeading } from "..";

export const JsxOpeningElementEditor: IStatementEditor<JsxOpeningElement> = ({ node }) => {
    const attributes = node.getAttributes();
    return (
        <div className="JSXOpeningElementEditor">
            <NodeViewHeading text="Tag Name" />
            <NodeView node={node.tagName} />
            {attributes.length > 0 && (
                <div>
                    <NodeViewHeading text="Attributes" />
                    {attributes.map(a => (
                        <NodeView key={a.key} node={a} />
                    ))}
                </div>
            )}
        </div>
    );
}
import React from "react";
import { NodeView, Collapsible, NodeViewHeading } from "components";
import { JsxAttribute } from "ast";
import { IStatementEditor } from "types/StatementEditorProps";

export const JsxAttributeEditor: IStatementEditor<JsxAttribute> = ({ node }) => {
    return (
        <div className="JSXAttributeEditor">
            <Collapsible trigger={node.getName()}>
                <div>
                    <NodeViewHeading text="Name" />
                    <NodeView node={node.name} />
                </div>
                {!!node.initializer && (
                    <div>
                        <NodeViewHeading text="Value" />
                        <NodeView node={node.initializer} />
                    </div>
                )}
            </Collapsible>
        </div>
    );
}
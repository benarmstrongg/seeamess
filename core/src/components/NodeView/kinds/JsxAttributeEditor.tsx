import React from "react";
import { NodeView } from "../../";
import { JsxAttribute } from "../../../ast";
import { IStatementEditor } from "../../../types/StatementEditorProps";
import { Collapsible } from "../../";
import { NodeViewHeading } from "..";

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
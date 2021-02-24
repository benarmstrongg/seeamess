import React from "react";
import { NodeView } from "..";
import { JsxAttribute } from "../../../ast";
import { IStatementEditor } from "../../../types/StatementEditorProps";
import { Collapsible } from "../../Collapsible";
import { StatementEditorTitle } from "../StatementEditorTitle";

export const JsxAttributeEditor: IStatementEditor<JsxAttribute> = ({ node }) => {
    return (
        <div className="JSXAttributeEditor">
            <Collapsible trigger={node.getName()}>
                <div>
                    <StatementEditorTitle text="Name" />
                    <NodeView node={node.name} />
                </div>
                {!!node.initializer && (
                    <div>
                        <StatementEditorTitle text="Value" />
                        <NodeView node={node.initializer} />
                    </div>
                )}
            </Collapsible>
        </div>
    );
}
import React from "react";
import { NodeView } from "../../";
import { BindingElement } from "../../../ast";
import { IStatementEditor } from "../../../types/StatementEditorProps";
import { Collapsible } from "../../";
import { NodeViewHeading } from "..";


export const BindingElementEditor: IStatementEditor<BindingElement> = ({ node }) => {

    return (
        <div className="BindingElementEditor">
            <Collapsible trigger={node.getNamesString()}>
                <div>
                    <NodeViewHeading text="Name" />
                    <NodeView node={node.name} />
                </div>
                {!!node.initializer && (
                    <div>
                        <NodeViewHeading text="Initializer" />
                        <NodeView node={node.initializer} />
                    </div>
                )}
            </Collapsible>
        </div>
    );
}
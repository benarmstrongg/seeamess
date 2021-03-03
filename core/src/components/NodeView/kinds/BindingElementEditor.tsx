import React from "react";
import { BindingElement } from "ast";
import { IStatementEditor } from "types/StatementEditorProps";
import { Collapsible, NodeView, NodeViewHeading } from "components";


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
import React from "react";
import { NodeView } from "..";
import { BindingElement } from "../../../ast";
import { IStatementEditor } from "../../../types/StatementEditorProps";
import { Collapsible } from "../../Collapsible";
import { StatementEditorTitle } from "../StatementEditorTitle";


export const BindingElementEditor: IStatementEditor<BindingElement> = ({ node }) => {

    return (
        <div className="BindingElementEditor">
            <Collapsible trigger={node.getNamesString()}>
                <div>
                    <StatementEditorTitle text="Name" />
                    <NodeView node={node.name} />
                </div>
                {!!node.initializer && (
                    <div>
                        <StatementEditorTitle text="Initializer" />
                        <NodeView node={node.initializer} />
                    </div>
                )}
            </Collapsible>
        </div>
    );
}
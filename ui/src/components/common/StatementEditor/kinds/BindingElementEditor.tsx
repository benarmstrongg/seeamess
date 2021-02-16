import React from "react";
import { StatementEditor } from "..";
import { BindingElement } from "../../../../code/ts-ast-wrapper/kinds/BindingElement";
import { IStatementEditor } from "../../../../types/StatementEditorProps";
import { Collapsible } from "../../Collapsible";
import { StatementEditorTitle } from "../StatementEditorTitle";


export const BindingElementEditor: IStatementEditor<BindingElement> = ({ node }) => {

    return (
        <div className="BindingElementEditor">
            <Collapsible trigger={node.getNamesString()}>
                <div>
                    <StatementEditorTitle text="Name" />
                    <StatementEditor node={node.name} />
                </div>
                {!!node.initializer && (
                    <div>
                        <StatementEditorTitle text="Initializer" />
                        <StatementEditor node={node.initializer} />
                    </div>
                )}
            </Collapsible>
        </div>
    );
}
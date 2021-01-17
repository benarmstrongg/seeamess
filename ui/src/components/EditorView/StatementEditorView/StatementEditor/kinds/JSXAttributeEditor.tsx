import React from "react";
import { StatementEditor } from "..";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { Collapsible } from "../../../../Collapsible";
import { StatementEditorTitle } from "../StatementEditorTitle";
import { JsxAttribute } from '../../../../EditorContainer/ts-ast-wrapper/kinds/JsxAttribute'

export const JsxAttributeEditor: IStatementEditor<JsxAttribute> = ({ node }) => {
    return (
        <div className="JSXAttributeEditor">
            <Collapsible trigger={node.getName()}>
                <div>
                    <StatementEditorTitle text="Name" />
                    <StatementEditor node={node.name} />
                </div>
                {!!node.initializer && (
                    <div>
                        <StatementEditorTitle text="Value" />
                        <StatementEditor node={node.initializer} />
                    </div>
                )}
            </Collapsible>
        </div>
    );
}
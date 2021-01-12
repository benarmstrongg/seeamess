import { JSXAttribute } from "jscodeshift";
import React from "react";
import { StatementEditor } from "..";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { Collapsible } from "../../../../Collapsible";
import { StatementEditorTitle } from "../StatementEditorTitle";

export const JSXAttributeEditor: IStatementEditor<JSXAttribute> = ({ node }) => {
    return (
        <div className="JSXAttributeEditor">
            <Collapsible trigger={node.name.name.toString()}>
                <StatementEditorTitle text="Name" />
                <StatementEditor node={node.name} />
                <br />
                <StatementEditorTitle text="Value" />
                <StatementEditor node={node.value} />
            </Collapsible>
        </div>
    );
}
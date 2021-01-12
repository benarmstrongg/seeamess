import { JSXOpeningElement } from "jscodeshift";
import React from "react";
import { getStatementEditorKey, StatementEditor } from "..";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { StatementEditorTitle } from "../StatementEditorTitle";

export const JSXOpeningElementEditor: IStatementEditor<JSXOpeningElement> = ({ node }) => {
    const { name, attributes } = node;
    return (
        <div className="JSXOpeningElementEditor">
            <StatementEditorTitle text="Element" />
            <StatementEditor node={name} />
            <div>
                <StatementEditorTitle text="Attributes" />
                {!!attributes && attributes.map((attr, i) => (
                    <StatementEditor key={getStatementEditorKey(attr, i)} node={attr} />
                ))}
            </div>
        </div>
    );
}
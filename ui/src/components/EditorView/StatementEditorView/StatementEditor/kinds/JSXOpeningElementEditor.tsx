import React from "react";
import { StatementEditor } from "..";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { JsxOpeningElement } from "../../../../EditorContainer/ts-ast-wrapper/kinds/JsxOpeningElement";
import { StatementEditorTitle } from "../StatementEditorTitle";

export const JsxOpeningElementEditor: IStatementEditor<JsxOpeningElement> = ({ node }) => {
    const attributes = node.getAttributes();
    return (
        <div className="JSXOpeningElementEditor">
            <StatementEditorTitle text="Tag Name" />
            <StatementEditor node={node.tagName} />
            {attributes.length > 0 && (
                <div>
                    <StatementEditorTitle text="Attributes" />
                    {attributes.map(a => (
                        <StatementEditor key={a.key} node={a} />
                    ))}
                </div>
            )}
        </div>
    );
}
import React from "react";
import { NodeView } from "..";
import { JsxElement } from "../../../ast";
import { IStatementEditor } from "../../../types/StatementEditorProps";
import { Collapsible } from "../../Collapsible";
import { StatementEditorTitle } from "../StatementEditorTitle";

export const JsxElementEditor: IStatementEditor<JsxElement> = ({ node }) => {
    const openingElement = node.getOpeningElement();
    const collapsibleHeader = `<${openingElement.getTagName()}>` || 'JSX Element';
    return (
        <div className="JSXElementEditor">
            <Collapsible trigger={collapsibleHeader}>
                <div>
                    <StatementEditorTitle text="JSX Element" />
                </div>
                <NodeView node={openingElement} />
                <div>
                    <StatementEditorTitle text="Children" />
                    {node.getChildElements().map(c => (
                        <NodeView key={c.key} node={c} />
                    ))}
                </div>
            </Collapsible>
        </div>
    );
}
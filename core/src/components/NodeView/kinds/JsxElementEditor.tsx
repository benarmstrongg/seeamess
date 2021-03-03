import React from "react";
import { NodeView, Collapsible, NodeViewHeading } from "components";
import { JsxElement } from "ast";
import { IStatementEditor } from "types/StatementEditorProps";

export const JsxElementEditor: IStatementEditor<JsxElement> = ({ node }) => {
    const openingElement = node.getOpeningElement();
    const collapsibleHeader = `<${openingElement.getTagName()}>` || 'JSX Element';
    return (
        <div className="JSXElementEditor">
            <Collapsible trigger={collapsibleHeader}>
                <div>
                    <NodeViewHeading text="JSX Element" />
                </div>
                <NodeView node={openingElement} />
                <div>
                    <NodeViewHeading text="Children" />
                    {node.getChildElements().map(c => (
                        <NodeView key={c.key} node={c} />
                    ))}
                </div>
            </Collapsible>
        </div>
    );
}
import { JSXElement } from "jscodeshift";
import React from "react";
import { getStatementEditorKey, StatementEditor } from "..";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { Collapsible } from "../../../../Collapsible";
import { StatementEditorTitle } from "../StatementEditorTitle";

export const JSXElementEditor: IStatementEditor<JSXElement> = ({ node }) => {
    const { openingElement, children } = node;
    const removeEmptyJSXTextChildren = () => {
        return children.filter(child => child.type === 'JSXText' ? (child.value.trim() !== '') : true);
    }
    const collapsibleHeader = openingElement.name.type === 'JSXIdentifier' ? openingElement.name.name : 'JSX Element';
    return (
        <div className="JSXElementEditor">
            <Collapsible trigger={collapsibleHeader}>
                <StatementEditor node={openingElement} />
                <div>
                    <StatementEditorTitle text="Children" />
                    {!!children && removeEmptyJSXTextChildren().map((child, i) => (
                        <StatementEditor key={getStatementEditorKey(child, i)} node={child} />
                    ))}
                </div>
            </Collapsible>
        </div>
    );
}
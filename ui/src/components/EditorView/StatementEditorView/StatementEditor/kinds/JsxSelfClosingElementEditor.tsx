import React from "react";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { Collapsible } from "../../../../Collapsible";
import { JsxSelfClosingElement } from "../../../../EditorContainer/ts-ast-wrapper/kinds/JsxSelfClosingElement";
import { StatementEditorTitle } from "../StatementEditorTitle";
import { JsxOpeningElementEditor } from "./JsxOpeningElementEditor";

export const JsxSelfClosingElementEditor: IStatementEditor<JsxSelfClosingElement> = ({ node }) => {
    const openingElement = node.getOpeningElement();
    const collapsibleHeader = `<${openingElement.getTagName()} />` || 'JSX Self Closing Element';
    return (
        <div className="JsxSelfClosingElementEditor">
            <Collapsible trigger={collapsibleHeader}>
                <div>
                    <StatementEditorTitle text="JSX Self Closing Element" />
                </div>
                <JsxOpeningElementEditor node={openingElement} />
            </Collapsible>
        </div>
    );
}
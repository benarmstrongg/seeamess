import React from "react";
import { JsxText } from "../../../../../../code/ts-ast-wrapper/kinds/JsxText";
import { IStatementEditor } from "../../../../../../types/StatementEditorProps";
import { ASTNodeInput } from "../../../../../common/ASTNodeInput";
import { Collapsible } from "../../../../../common/Collapsible";
import { StatementEditorTitle } from "../StatementEditorTitle";

export const JsxTextEditor: IStatementEditor<JsxText> = ({ node }) => {
    const collapsibleHeader = node.text || 'JSX Text';
    return (
        <div className="JSXTextEditor">
            <Collapsible trigger={collapsibleHeader}>
                <StatementEditorTitle text="JSX Text" />
                <ASTNodeInput placeholder="text" node={node} value={node.text} />
            </Collapsible>
        </div>
    );
}
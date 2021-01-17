import React from "react";
import { JsxText } from "../../../../../../../code/ts-ast-wrapper/kinds/JsxText";
import { IStatementEditor } from "../../../../../../../types/StatementEditorProps";
import { ASTNodeInput } from "../../../../../../common/ASTNodeInput";
import { Collapsible } from "../../../../../../common/Collapsible";

export const JsxTextEditor: IStatementEditor<JsxText> = ({ node }) => {
    return (
        <div className="JSXTextEditor">
            <Collapsible trigger="JSX Text">
                <ASTNodeInput placeholder="text" node={node} value={node.text} />
            </Collapsible>
        </div>
    );
}
import { ReturnStatement } from "jscodeshift";
import React from "react";
import { StatementEditor } from "..";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { Collapsible } from "../../../../Collapsible";
// import { StatementEditorTitle } from "../StatementEditorTitle";

export const ReturnStatementEditor: IStatementEditor<ReturnStatement> = ({ node }) => {
    return (
        <div className="ReturnStatementEditor">
            <Collapsible trigger="Return statement">
                {/* <StatementEditorTitle text="Value" /> */}
                <StatementEditor node={node.argument} />
            </Collapsible>
        </div>
    );
}
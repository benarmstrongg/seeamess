import React from "react";
import { NodeView } from "..";
import { ReturnStatement } from "../../../ast";
import { IStatementEditor } from "../../../types/StatementEditorProps";
import { Collapsible } from "../../Collapsible";
import { StatementEditorTitle } from "../StatementEditorTitle";

export const ReturnStatementEditor: IStatementEditor<ReturnStatement> = ({ node }) => {
    return (
        <div className="ReturnStatementEditor">
            <Collapsible trigger="Return Statement">
                {!!node.expression && (
                    <>
                        <StatementEditorTitle text="Expression" />
                        <NodeView node={node.expression} />
                    </>

                )}
            </Collapsible>
        </div>
    );
}
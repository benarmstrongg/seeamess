import React from "react";
import { NodeView } from "../../";
import { ReturnStatement } from "../../../ast";
import { IStatementEditor } from "../../../types/StatementEditorProps";
import { Collapsible } from "../../";
import { NodeViewHeading } from "..";

export const ReturnStatementEditor: IStatementEditor<ReturnStatement> = ({ node }) => {
    return (
        <div className="ReturnStatementEditor">
            <Collapsible trigger="Return Statement">
                {!!node.expression && (
                    <>
                        <NodeViewHeading text="Expression" />
                        <NodeView node={node.expression} />
                    </>

                )}
            </Collapsible>
        </div>
    );
}
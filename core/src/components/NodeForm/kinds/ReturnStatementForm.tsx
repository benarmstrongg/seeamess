import React from "react";
import { NodeForm, Collapsible, NodeFormHeading } from "../../";
import { ReturnStatement } from "../../../ast";
import { NodeFormComponent } from "../types";

export const ReturnStatementForm: NodeFormComponent<ReturnStatement> = ({ node }) => {
    return (
        <div className="ReturnStatementEditor">
            <Collapsible trigger="Return Statement">
                {!!node.expression && (
                    <>
                        <NodeFormHeading text="Expression" />
                        <NodeForm node={node.expression} />
                    </>

                )}
            </Collapsible>
        </div>
    );
}
import { BlockStatement } from "jscodeshift";
import React from "react";
import { getStatementEditorKey, StatementEditor } from "..";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";

export const BlockStatementEditor: IStatementEditor<BlockStatement> = ({ node }) => {
    const { body } = node;
    console.log(body);
    return (
        <div className="BlockStatementEditor">
            {body.map((statement, i) => (
                <StatementEditor key={getStatementEditorKey(statement, i)} node={statement} />
            ))}
        </div>
    );
}
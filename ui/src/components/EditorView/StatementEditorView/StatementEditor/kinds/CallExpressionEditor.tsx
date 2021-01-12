import { CallExpression } from "jscodeshift";
import React from "react";
import { getStatementEditorKey, StatementEditor } from "..";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { Collapsible } from "../../../../Collapsible";

export const CallExpressionEditor: IStatementEditor<CallExpression> = ({ node }) => {
    const { callee, arguments: args } = node;
    return (
        <div className="CallExpressionEditor">
            <Collapsible trigger="Call Expression">
                callee
                <StatementEditor node={callee} showTypeField={false} fieldName="" />
                <div>
                    arguments
                {args.map((arg, i) => (
                    <StatementEditor key={getStatementEditorKey(arg, i)} node={arg} showTypeField={false} fieldName="" />
                ))}
                </div>
            </Collapsible>
        </div>
    );
}
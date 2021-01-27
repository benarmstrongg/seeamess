import React from "react";
import { StatementEditor } from "..";
import { CallExpression } from "../../../../../../code/ts-ast-wrapper/kinds/CallExpression";
import { IStatementEditor } from "../../../../../../types/StatementEditorProps";
import { Collapsible } from "../../../../../common/Collapsible";
import { StatementEditorTitle } from "../StatementEditorTitle";

export const CallExpressionEditor: IStatementEditor<CallExpression> = ({ node }) => {
    const name = node.getName();
    const args = node.getArguments();
    const collapsibleHeader = name ? `${name}()` : 'Call Expression';
    return (
        <div className="CallExpressionEditor">
            <Collapsible trigger={collapsibleHeader}>
                <div>
                    <StatementEditorTitle text="Call Expression" />
                </div>
                <div>
                    <StatementEditorTitle text="Name" />
                    <StatementEditor node={node.expression} />
                </div>
                {args.length > 0 && (
                    <div>
                        <StatementEditorTitle text="Arguments" />
                        {args.map(a => (
                            <StatementEditor key={a.key} node={a} />
                        ))}
                    </div>
                )}
            </Collapsible>
        </div>
    );
}
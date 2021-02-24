import React from "react";
import { NodeView } from "..";
import { CallExpression } from "../../../ast";
import { IStatementEditor } from "../../../types/StatementEditorProps";
import { Collapsible } from "../../Collapsible";
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
                    <NodeView node={node.expression} />
                </div>
                {args.length > 0 && (
                    <div>
                        <StatementEditorTitle text="Arguments" />
                        {args.map(a => (
                            <NodeView key={a.key} node={a} />
                        ))}
                    </div>
                )}
            </Collapsible>
        </div>
    );
}
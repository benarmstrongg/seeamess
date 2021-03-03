import React from "react";
import { NodeView, Collapsible, NodeViewHeading } from "components";
import { CallExpression } from "ast";
import { IStatementEditor } from "types/StatementEditorProps";

export const CallExpressionEditor: IStatementEditor<CallExpression> = ({ node }) => {
    const name = node.getName();
    const args = node.getArguments();
    const collapsibleHeader = name ? `${name}()` : 'Call Expression';
    return (
        <div className="CallExpressionEditor">
            <Collapsible trigger={collapsibleHeader}>
                <div>
                    <NodeViewHeading text="Call Expression" />
                </div>
                <div>
                    <NodeViewHeading text="Name" />
                    <NodeView node={node.expression} />
                </div>
                {args.length > 0 && (
                    <div>
                        <NodeViewHeading text="Arguments" />
                        {args.map(a => (
                            <NodeView key={a.key} node={a} />
                        ))}
                    </div>
                )}
            </Collapsible>
        </div>
    );
}
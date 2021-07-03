import React from "react";
import { NodeForm, Collapsible, NodeFormHeading } from "components";
import { CallExpression } from "ast";
import { NodeFormComponent } from "../types";

export const CallExpressionForm: NodeFormComponent<CallExpression> = ({ node }) => {
    const name = node.getName();
    const args = node.getArguments();
    const collapsibleHeader = name ? `${name}()` : 'Call Expression';
    return (
        <div className="CallExpressionEditor">
            <Collapsible trigger={collapsibleHeader}>
                <div>
                    <NodeFormHeading text="Call Expression" />
                </div>
                <div>
                    <NodeFormHeading text="Name" />
                    <NodeForm node={node.expression} />
                </div>
                {args.length > 0 && (
                    <div>
                        <NodeFormHeading text="Arguments" />
                        {args.map(a => (
                            <NodeForm key={a.key} node={a} />
                        ))}
                    </div>
                )}
            </Collapsible>
        </div>
    );
}
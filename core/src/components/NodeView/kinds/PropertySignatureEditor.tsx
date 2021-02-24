import React from "react";
import { NodeView } from "..";
import { PropertySignature } from "../../../ast";
import { IStatementEditor } from "../../../types/StatementEditorProps";
import { Collapsible } from "../../Collapsible";
import { StatementEditorTitle } from "../StatementEditorTitle";

export const PropertySignatureEditor: IStatementEditor<PropertySignature> = ({ node }) => {
    const typeMembers = node.getTypeMembers();
    const collapsibleHeader = node.getName() || 'Property Signature';
    return (
        <div className="PropertySignatureEditor">
            <Collapsible trigger={collapsibleHeader}>
                <div>
                    <StatementEditorTitle text="Name" />
                    <NodeView node={node.name} />
                </div>
                {!!node.initializer && (
                    <div>
                        <StatementEditorTitle text="Initializer" />
                        <NodeView node={node.initializer} />
                    </div>
                )}
                {!!node.type && (
                    <div>
                        <StatementEditorTitle text="Type" />
                        {typeMembers.length > 0 && typeMembers.map(m => (
                            <NodeView key={m.key} node={m} />
                        ))}
                        {typeMembers.length === 0 && (
                            <NodeView node={node.type} />
                        )}
                    </div>
                )}
            </Collapsible>
        </div>
    );
}
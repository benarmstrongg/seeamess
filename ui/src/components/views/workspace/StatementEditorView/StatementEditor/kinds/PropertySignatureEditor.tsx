import React from "react";
import { StatementEditor } from "..";
import { PropertySignature } from "../../../../../../code/ts-ast-wrapper/kinds/PropertySignature";
import { IStatementEditor } from "../../../../../../types/StatementEditorProps";
import { Collapsible } from "../../../../../common/Collapsible";
import { StatementEditorTitle } from "../StatementEditorTitle";

export const PropertySignatureEditor: IStatementEditor<PropertySignature> = ({ node }) => {
    const typeMembers = node.getTypeMembers();
    const collapsibleHeader = node.getName() || 'Property Signature';
    return (
        <div className="PropertySignatureEditor">
            <Collapsible trigger={collapsibleHeader}>
                <div>
                    <StatementEditorTitle text="Name" />
                    <StatementEditor node={node.name} />
                </div>
                {!!node.initializer && (
                    <div>
                        <StatementEditorTitle text="Initializer" />
                        <StatementEditor node={node.initializer} />
                    </div>
                )}
                {!!node.type && (
                    <div>
                        <StatementEditorTitle text="Type" />
                        {typeMembers.length > 0 && typeMembers.map(m => (
                            <StatementEditor key={m.key} node={m} />
                        ))}
                        {typeMembers.length === 0 && (
                            <StatementEditor node={node.type} />
                        )}
                    </div>
                )}
            </Collapsible>
        </div>
    );
}
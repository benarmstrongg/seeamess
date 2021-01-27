import React from "react";
import { StatementEditor } from "..";
import { TypeAliasDeclaration } from "../../../../../../code/ts-ast-wrapper/kinds/TypeAliasDeclaration";
import { IStatementEditor } from "../../../../../../types/StatementEditorProps";
import { Collapsible } from "../../../../../common/Collapsible";
import { StatementEditorTitle } from "../StatementEditorTitle";

export const TypeAliasDeclarationEditor: IStatementEditor<TypeAliasDeclaration> = ({ node }) => {
    const collapsibleHeader = `type ${node.getName()}`;
    return (
        <div className="TypeAliasDeclarationEditor">
            <Collapsible trigger={collapsibleHeader}>
                <div>
                    <StatementEditorTitle text="Type Alias Declaration" />
                </div>
                <div>
                    <StatementEditorTitle text="Name" />
                    <StatementEditor node={node.name} />
                </div>
                <div>
                    <StatementEditorTitle text="Type" />
                    <StatementEditor node={node.type['type']} />
                </div>
            </Collapsible>
        </div>
    );
}
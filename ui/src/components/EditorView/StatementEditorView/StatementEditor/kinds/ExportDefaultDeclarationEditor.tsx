import { ExportDefaultDeclaration } from "jscodeshift";
import React from "react";
import { StatementEditor } from "..";
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { Collapsible } from "../../../../Collapsible";

export const ExportDefaultDeclarationEditor: IStatementEditor<ExportDefaultDeclaration> = ({ node }) => {
    return (
        <div className="ExportDefaultDeclarationEditor">
            <Collapsible trigger="Export Default Declaration">
                <StatementEditor node={node.declaration} />
            </Collapsible>
        </div>
    );
}
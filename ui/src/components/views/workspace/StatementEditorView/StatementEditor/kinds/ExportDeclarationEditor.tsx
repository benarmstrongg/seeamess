import React from "react";
import { ExportDeclaration } from "../../../../../../code/ts-ast-wrapper/kinds/ExportDeclaration";
import { IStatementEditor } from "../../../../../../types/StatementEditorProps";
import { Collapsible } from "../../../../../common/Collapsible";
import { NamedExportsEditor } from "./NamedExportsEditor";
import { NamespaceExportEditor } from "./NamespaceExportEditor";

export const ExportDeclarationEditor: IStatementEditor<ExportDeclaration> = ({ node }) => {
    const exportClause = node.getExportClause();
    if (!exportClause)
        return null;
    const namedExports = exportClause.getNamedExports();
    const namespaceExport = exportClause.getNamespaceExport();
    const moduleSpecifier = node.getModuleName();
    const render = () => {
        if (!!namedExports) {
            return <NamedExportsEditor node={namedExports} />;
        }
        if (!!namespaceExport) {
            return <NamespaceExportEditor node={namespaceExport} />;
        }
        return null;
    }
    const getCollapsibleHeader = () => {
        let suffix = '';
        if (!!namedExports) {
            suffix = namedExports.getElements().map(e => e.text).join(', ');
        }
        else if (!!namespaceExport) {
            suffix = namespaceExport.name.text;
        }
        if (!!moduleSpecifier) {
            suffix += ` from ${moduleSpecifier}`;
        }
        return suffix !== '' ? `export { ${suffix} }` : 'Export Declaration';
    }
    return (
        <div className="ExportDeclarationEditor">
            <Collapsible trigger={getCollapsibleHeader()}>
                {render()}
            </Collapsible>
        </div>
    )
}
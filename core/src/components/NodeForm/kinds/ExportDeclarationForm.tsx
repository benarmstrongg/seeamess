import React from "react";
import { ExportDeclaration } from "../../../ast";
import { NodeFormComponent } from "../types";
import { Collapsible } from "../../";
import { NamedExportsForm, NamespaceExportForm } from "../../nodeviews";

export const ExportDeclarationForm: NodeFormComponent<ExportDeclaration> = ({ node }) => {
    const exportClause = node.getExportClause();
    if (!exportClause)
        return null;
    const namedExports = exportClause.getNamedExports();
    const namespaceExport = exportClause.getNamespaceExport();
    const moduleSpecifier = node.getModuleName();
    const render = () => {
        if (!!namedExports) {
            return <NamedExportsForm node={namedExports} />;
        }
        if (!!namespaceExport) {
            return <NamespaceExportForm node={namespaceExport} />;
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
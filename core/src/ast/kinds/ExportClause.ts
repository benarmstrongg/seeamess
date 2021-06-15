import ts from "typescript";
import { AST, NamedExports, NamespaceExport } from "ast";

export class ExportClause extends AST implements Partial<NamedExports>, Partial<NamespaceExport> {
    _declarationBrand;
    parent: any;
    kind: any;
    elements?: ts.NamedExports['elements'];
    name?: ts.NamespaceImport['name'];

    constructor(node: ts.NamedExports | ts.NamespaceExport) {
        super(node);
        this.parent = node.parent;
        this.kind = node.kind;
        if (ts.isNamespaceExport(node)) {
            this.name = node.name;
        }
        if (ts.isNamedExports(node)) {
            this.elements = node.elements;
        }
    }

    getNamedExports(): NamedExports | undefined {
        if (!!this.elements) {
            return AST.as(this as ts.NamedExports, NamedExports);
        }
    }

    getNamespaceExport(): NamespaceExport | undefined {
        if (!!this.name) {
            return AST.as(this as ts.NamespaceExport, NamespaceExport);
        }
    }

}
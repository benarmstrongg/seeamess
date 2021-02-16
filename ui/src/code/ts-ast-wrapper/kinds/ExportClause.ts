import ts from "typescript";
import { ASTNode } from "../ASTNode";
import { NamedExports } from "./NamedExports";
import { NamespaceExport } from "./NamespaceExport";

export class ExportClause extends ASTNode implements Partial<NamedExports>, Partial<NamespaceExport> {
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
            return ASTNode.as(this as ts.NamedExports, NamedExports);
        }
    }

    getNamespaceExport(): NamespaceExport | undefined {
        if (!!this.name) {
            return ASTNode.as(this as ts.NamespaceExport, NamespaceExport);
        }
    }

}
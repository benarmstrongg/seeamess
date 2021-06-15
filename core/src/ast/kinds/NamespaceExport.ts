import ts from "typescript";
import { AST } from "ast";

export class NamespaceExport extends AST implements ts.NamespaceExport {
    _declarationBrand;
    name: ts.NamespaceExport['name'];
    parent: ts.NamespaceExport['parent'];
    kind: ts.NamespaceExport['kind'];

    constructor(node: ts.NamespaceExport) {
        super(node);
        this.name = node.name;
        this.parent = node.parent;
        this.kind = node.kind;
    }
}
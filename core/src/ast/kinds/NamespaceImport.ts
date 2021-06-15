import ts from "typescript";
import { AST, Identifier } from "ast";

export class NamespaceImport extends AST implements ts.NamespaceImport {
    _declarationBrand;
    name: ts.NamespaceImport['name'];
    parent: ts.NamespaceImport['parent'];
    kind: ts.NamespaceImport['kind'];

    constructor(node: ts.NamespaceImport) {
        super(node);
        this.name = node.name;
        this.parent = node.parent;
        this.kind = node.kind;
    }

    getElements(): Identifier[] {
        return [AST.as(this.name, Identifier)];
    }
}
import ts from "typescript";
import { ASTNode, Identifier } from "ast";

export class NamespaceImport extends ASTNode implements ts.NamespaceImport {
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
        return [ASTNode.as(this.name, Identifier)];
    }
}
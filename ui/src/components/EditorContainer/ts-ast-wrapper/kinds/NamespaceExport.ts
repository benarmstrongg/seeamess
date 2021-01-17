import ts from "typescript";
import { ASTNode } from "../ASTNode";

export class NamespaceExport extends ASTNode implements ts.NamespaceExport {
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
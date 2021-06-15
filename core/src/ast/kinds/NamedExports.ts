import ts from "typescript";
import { AST, Identifier } from "ast";

export class NamedExports extends AST implements ts.NamedExports {
    elements: ts.NamedExports['elements'];
    parent: ts.NamedExports['parent'];
    kind: ts.NamedExports['kind'];

    constructor(node: ts.NamedExports) {
        super(node);
        this.elements = node.elements;
        this.parent = node.parent;
        this.kind = node.kind;
    }

    getElements(): Identifier[] {
        return this.elements.map(e => AST.as(e.name, Identifier));
    }
}
import ts from "typescript";
import { ast, AST, Identifier } from "../../ast";

export class NamedImports extends AST implements ts.NamedImports {
    elements: ts.NamedImports['elements'];
    parent: ts.NamedImports['parent'];
    kind: ts.NamedImports['kind'];

    constructor(node: ts.NamedImports) {
        super(node);
        this.elements = node.elements;
        this.parent = node.parent;
        this.kind = node.kind;
    }

    getElements(): Identifier[] {
        return this.elements.map(e => ast(e.name).to(Identifier));
    }
}
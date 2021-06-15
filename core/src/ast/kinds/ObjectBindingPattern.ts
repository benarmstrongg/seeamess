import ts from "typescript";
import { AST, BindingElement } from "ast";

export class ObjectBindingPattern extends AST implements ts.ObjectBindingPattern {
    elements: ts.ObjectBindingPattern['elements'];
    parent: ts.ObjectBindingPattern['parent'];
    kind: ts.ObjectBindingPattern['kind'];

    constructor(node: ts.ObjectBindingPattern) {
        super(node);
        this.elements = node.elements;
        this.parent = node.parent;
        this.kind = node.kind;
    }

    getElements(): BindingElement[] {
        return this.elements.map(e => AST.as(e, BindingElement));
    }

    getNames(): string[] {
        return this.elements.map(e => AST.as(e, BindingElement).getNames()).flat();
    }

    getNamesString(): string {
        return this.elements.map(e => AST.as(e, BindingElement).getNamesString()).join(', ');
    }
}
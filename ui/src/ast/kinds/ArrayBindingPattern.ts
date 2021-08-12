import ts from "typescript";
import { AST, ast, BindingElement, BindingName } from "ast";

export class ArrayBindingPattern extends AST implements ts.ArrayBindingPattern {
    elements: ts.ArrayBindingPattern['elements'];
    parent: ts.ArrayBindingPattern['parent'];
    kind: ts.ArrayBindingPattern['kind'];

    constructor(node: ts.ArrayBindingPattern) {
        super(node);
        this.elements = node.elements;
        this.parent = node.parent;
        this.kind = node.kind;
    }

    getElements(): BindingElement[] {
        return this.elements.map(e => ast(e).to(BindingElement));
    }

    getNames(): string[] {
        return this.elements.map(e => {
            if (ts.isBindingElement(e)) {
                return ast(e.name).to(BindingName).getNames();
            }
            if (ts.isOmittedExpression(e)) {
                return e.getText();
            }
            return '';
        }).flat();
    }

    getNamesString(): string {
        return this.elements.map(e => {
            if (ts.isBindingElement(e)) {
                return ast(e.name).to(BindingName).getNamesString();
            }
            if (ts.isOmittedExpression(e)) {
                return e.getText();
            }
            return '';
        }).join(', ');
    }
}
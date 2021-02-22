import ts from "typescript";
import { ASTNode } from "../ASTNode";
import { BindingElement } from "./BindingElement";
import { BindingName } from "./BindingName";

export class ArrayBindingPattern extends ASTNode implements ts.ArrayBindingPattern {
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
        return this.elements.map(e => ASTNode.as(e as any, BindingElement));
    }

    getNames(): string[] {
        return this.elements.map(e => {
            if (ts.isBindingElement(e)) {
                return ASTNode.as(e.name, BindingName).getNames();
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
                return ASTNode.as(e.name, BindingName).getNamesString();
            }
            if (ts.isOmittedExpression(e)) {
                return e.getText();
            }
            return '';
        }).join(', ');
    }
}
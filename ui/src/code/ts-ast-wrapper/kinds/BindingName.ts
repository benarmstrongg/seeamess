import ts from "typescript";
import { ASTNode } from "../ASTNode";

export class BindingName extends ASTNode {
    constructor(node: ts.BindingName) {
        super(node);
        this.kind = node.kind;
    }

    getNames(): string {
        if (ts.isIdentifier(this)) {
            return this.escapedText.toString();
        }
        if (ts.isObjectBindingPattern(this)) {
            return `{ ${this.elements.map(e => ASTNode.fromNode(e.name, BindingName).getNames()).join(', ')} }`;
        }
        if (ts.isArrayBindingPattern(this)) {
            return `[ ${this.elements.map(e => {
                if (ts.isBindingElement(e)) {
                    return ASTNode.fromNode(e.name, BindingName).getNames();
                }
                if (ts.isOmittedExpression(e)) {
                    return e.getText();
                }
                return '';
            }).join(', ')} ]`;
        }
        return '';
    }
}
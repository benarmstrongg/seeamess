import ts from "typescript";
import { ASTNode } from "../ASTNode";
import { ArrayBindingPattern } from "./ArrayBindingPattern";
import { ObjectBindingPattern } from "./ObjectBindingPattern";

export class BindingName extends ASTNode {
    constructor(node: ts.BindingName) {
        super(node);
        this.kind = node.kind;
    }

    getNames(): string[] {
        if (ts.isIdentifier(this)) {
            return [this.text || this.escapedText.toString()];
        }
        if (ts.isObjectBindingPattern(this)) {
            return ASTNode.as(this, ObjectBindingPattern).getNames();
        }
        if (ts.isArrayBindingPattern(this)) {
            return ASTNode.as(this, ArrayBindingPattern).getNames();
        }
        return [];
    }

    getNamesString(): string {
        if (ts.isIdentifier(this)) {
            return this.text || this.escapedText.toString();
        }
        if (ts.isObjectBindingPattern(this)) {
            return `{ ${ASTNode.as(this, ObjectBindingPattern).getNamesString()} }`;
        }
        if (ts.isArrayBindingPattern(this)) {
            return `[${ASTNode.as(this, ArrayBindingPattern).getNamesString()}]`;
        }
        return '';
    }
}
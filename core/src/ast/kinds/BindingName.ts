import ts from "typescript";
import { AST, ArrayBindingPattern, ObjectBindingPattern } from "ast";

export class BindingName extends AST {
    constructor(node: ts.BindingName) {
        super(node);
        this.kind = node.kind;
    }

    getNames(): string[] {
        if (ts.isIdentifier(this)) {
            return [this.text || this.escapedText.toString()];
        }
        if (ts.isObjectBindingPattern(this)) {
            return AST.as(this, ObjectBindingPattern).getNames();
        }
        if (ts.isArrayBindingPattern(this)) {
            return AST.as(this, ArrayBindingPattern).getNames();
        }
        return [];
    }

    getNamesString(): string {
        if (ts.isIdentifier(this)) {
            return this.text || this.escapedText.toString();
        }
        if (ts.isObjectBindingPattern(this)) {
            return `{ ${AST.as(this, ObjectBindingPattern).getNamesString()} }`;
        }
        if (ts.isArrayBindingPattern(this)) {
            return `[${AST.as(this, ArrayBindingPattern).getNamesString()}]`;
        }
        return '';
    }
}
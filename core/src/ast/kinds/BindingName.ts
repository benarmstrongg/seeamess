import ts from "typescript";
import { AST, ArrayBindingPattern, ObjectBindingPattern, ast } from "../../ast";

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
            return ast(this).to(ObjectBindingPattern).getNames();
        }
        if (ts.isArrayBindingPattern(this)) {
            return ast(this).to(ArrayBindingPattern).getNames();
        }
        return [];
    }

    getNamesString(): string {
        if (ts.isIdentifier(this)) {
            return this.text || this.escapedText.toString();
        }
        if (ts.isObjectBindingPattern(this)) {
            return `{ ${ast(this).to(ObjectBindingPattern).getNamesString()} }`;
        }
        if (ts.isArrayBindingPattern(this)) {
            return `[${ast(this).to(ArrayBindingPattern).getNamesString()}]`;
        }
        return '';
    }
}
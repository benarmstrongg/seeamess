import ts from "typescript";
import { AST } from "ast";
import { ast } from "ast/AST";

export class ReturnStatement extends AST implements ts.ReturnStatement {
    _statementBrand: ts.ReturnStatement['_statementBrand'];
    expression?: ts.ReturnStatement['expression'];
    kind: ts.ReturnStatement['kind'];

    constructor(node: ts.ReturnStatement) {
        super(node);
        this.expression = node.expression;
        this.kind = node.kind;
    }

    getExpression(): AST | undefined {
        return this.expression && ast(this.expression);
    }
}
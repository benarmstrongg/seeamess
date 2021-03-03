import ts from "typescript";
import { ASTNode } from "ast";

export class ExpressionStatement extends ASTNode implements ts.ExpressionStatement {
    _statementBrand: ts.ExpressionStatement['_statementBrand'];
    expression: ts.ExpressionStatement['expression'];
    kind: ts.ExpressionStatement['kind'];

    constructor(node: ts.ExpressionStatement) {
        super(node);
        this.expression = node.expression;
        this.kind = node.kind;
    }
}
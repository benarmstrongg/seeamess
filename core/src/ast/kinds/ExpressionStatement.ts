import ts from "typescript";
import { AST } from "../../ast";

export class ExpressionStatement extends AST implements ts.ExpressionStatement {
    _statementBrand: ts.ExpressionStatement['_statementBrand'];
    expression: ts.ExpressionStatement['expression'];
    kind: ts.ExpressionStatement['kind'];

    constructor(node: ts.ExpressionStatement) {
        super(node);
        this.expression = node.expression;
        this.kind = node.kind;
    }
}
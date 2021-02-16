import ts from "typescript";
import { ASTNode } from "../ASTNode";

export class ReturnStatement extends ASTNode implements ts.ReturnStatement {
    _statementBrand: ts.ReturnStatement['_statementBrand'];
    expression?: ts.ReturnStatement['expression'];
    kind: ts.ReturnStatement['kind'];

    constructor(node: ts.ReturnStatement) {
        super(node);
        this.expression = node.expression;
        this.kind = node.kind;
    }

    getExpression(): ASTNode | undefined {
        return this.expression && ASTNode.from(this.expression);
    }
}
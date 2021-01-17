import ts from "typescript";
import { ASTNode } from "../ASTNode";

export class BinaryExpression extends ASTNode implements ts.BinaryExpression {
    _expressionBrand;
    _declarationBrand;
    left: ts.BinaryExpression['left'];
    operatorToken: ts.BinaryExpression['operatorToken'];
    right: ts.BinaryExpression['right'];
    kind: ts.BinaryExpression['kind'];

    constructor(node: ts.BinaryExpression) {
        super(node);
        this.left = node.left;
        this.operatorToken = node.operatorToken;
        this.right = node.right;
        this.kind = node.kind;
    }

    getOperatorText(): string {
        return ts.tokenToString(this.operatorToken.kind) || '';
    }


}
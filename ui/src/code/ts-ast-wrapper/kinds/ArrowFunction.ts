import ts from "typescript";
import { ASTNode } from "../ASTNode";
import { FunctionExpression } from "./FunctionExpression";

export class ArrowFunction extends ASTNode implements ts.ArrowFunction {
    _functionLikeDeclarationBrand;
    _declarationBrand;
    _expressionBrand;
    equalsGreaterThanToken: ts.ArrowFunction['equalsGreaterThanToken'];
    body: ts.ArrowFunction['body'];
    name: ts.ArrowFunction['name'];
    parameters: ts.ArrowFunction['parameters'];
    questionToken?: ts.ArrowFunction['questionToken'];
    kind: ts.ArrowFunction['kind'];

    constructor(node: ts.ArrowFunction) {
        super(node);
        this.equalsGreaterThanToken = node.equalsGreaterThanToken
        this.body = node.body;
        this.parameters = node.parameters;
        this.questionToken = node.questionToken;
        this.kind = node.kind;
    }

    getExpression(): FunctionExpression {
        return ASTNode.fromNode(this as any, FunctionExpression);
    }
}
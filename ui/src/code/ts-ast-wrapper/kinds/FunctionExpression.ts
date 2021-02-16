import ts from "typescript";
import { ASTNode } from "../ASTNode";
import { Identifier } from "./Identifier";
import { ParameterDeclaration } from "./ParameterDeclaration";

export class FunctionExpression extends ASTNode implements ts.FunctionExpression {
    _memberExpressionBrand;
    _leftHandSideExpressionBrand;
    _unaryExpressionBrand;
    _updateExpressionBrand;
    _expressionBrand;
    _declarationBrand;
    _primaryExpressionBrand;
    _functionLikeDeclarationBrand;
    body: ts.FunctionExpression['body'];
    name?: ts.FunctionExpression['name'];
    parameters: ts.FunctionExpression['parameters'];
    kind: ts.FunctionExpression['kind'];

    constructor(node: ts.FunctionExpression) {
        super(node);
        this.body = node.body;
        this.name = node.name;
        this.parameters = node.parameters;
        this.kind = node.kind;
    }

    getParameters(): ParameterDeclaration[] {
        return this.parameters.map(p => ASTNode.as(p, ParameterDeclaration));
    }

    getName(): string | undefined {
        return this.name && ASTNode.as(this.name, Identifier).text;
    }
}
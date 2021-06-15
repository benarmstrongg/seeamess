import ts from "typescript";
import { AST, Identifier, ParameterDeclaration } from "ast";

export class FunctionExpression extends AST implements ts.FunctionExpression {
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
        return this.parameters.map(p => AST.as(p, ParameterDeclaration));
    }

    getName(): string | undefined {
        return this.name && AST.as(this.name, Identifier).text;
    }
}
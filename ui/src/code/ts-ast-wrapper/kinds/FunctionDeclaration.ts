import ts from "typescript";
import { ASTNode } from "../ASTNode";
import { FunctionExpression } from "./FunctionExpression";
import { ParameterDeclaration } from "./ParameterDeclaration";

export class FunctionDeclaration extends ASTNode implements ts.FunctionDeclaration {
    _functionLikeDeclarationBrand: ts.FunctionDeclaration['_functionLikeDeclarationBrand'];
    _declarationBrand: ts.FunctionDeclaration['_declarationBrand'];
    _statementBrand: ts.FunctionDeclaration['_statementBrand'];
    parameters: ts.FunctionDeclaration['parameters'];
    kind: ts.FunctionDeclaration['kind'];
    body?: ts.FunctionDeclaration['body'];
    name?: ts.FunctionDeclaration['name'];

    constructor(node: ts.FunctionDeclaration) {
        super(node);
        this.parameters = node.parameters;
        this.kind = node.kind;
        this.body = node.body;
        this.name = node.name;
    }

    getParameters(): ParameterDeclaration[] {
        return this.parameters.map(p => ASTNode.fromNode(p, ParameterDeclaration));
    }

    getExpression(): FunctionExpression {
        return ASTNode.fromNode(this as any, FunctionExpression);
    }
}
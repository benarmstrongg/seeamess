import ts from "typescript";
import { AST, ast, FunctionExpression, ParameterDeclaration } from "../../ast";
import { ReturnStatement } from "./ReturnStatement";
import { Identifier } from "./Identifier";
import { ArrowFunction } from "./ArrowFunction";
import { Block } from "./Block";

export class FunctionDeclaration extends AST implements ts.FunctionDeclaration {
    static si(node: ts.Node): node is FunctionDeclaration {
        if (ts.isFunctionDeclaration(node)) {
            return true;
        }
        else if (ts.isVariableDeclaration(node)) {
            if (ts.isIdentifier(node.name) &&
                node.initializer && ts.isArrowFunction(node.initializer)
            ) {
                return true;
            }
        }
        return false;
    }

    _functionLikeDeclarationBrand: ts.FunctionDeclaration['_functionLikeDeclarationBrand'];
    _declarationBrand: ts.FunctionDeclaration['_declarationBrand'];
    _statementBrand: ts.FunctionDeclaration['_statementBrand'];
    parameters!: ts.FunctionDeclaration['parameters'];
    kind: ts.FunctionDeclaration['kind'];
    body?: ts.FunctionDeclaration['body'];
    name?: ts.FunctionDeclaration['name'];

    _variableDeclaration?: ts.VariableDeclaration;

    constructor(node: ts.FunctionDeclaration | ts.VariableDeclaration) {
        super(node);
        this.kind = ts.SyntaxKind.FunctionDeclaration;
        if (ts.isFunctionDeclaration(node)) {
            this.parameters = node.parameters;
            this.body = node.body;
            this.name = node.name;

        }
        if (ts.isVariableDeclaration(node)) {
            this.name = ast(node.name).to(Identifier);
            const fn = ast(node.initializer!).to(ArrowFunction);
            this.body = ast(fn.body).to(Block);
            this.parameters = fn.parameters;
            this._variableDeclaration = node;
        }
    }

    getParams(): ParameterDeclaration[] {
        return this.parameters.map(p => ast(p).to(ParameterDeclaration));
    }

    getExpression(): FunctionExpression {
        return this.to(FunctionExpression);
    }

    getBody(): Block | undefined {
        return this.body && ast(this.body).to(Block);
    }

    getName(): string | undefined {
        return this.name?.text || this.name?.escapedText.toString();
    }

    get returnStatement(): ReturnStatement | undefined {
        return this.getBody()?.find(ReturnStatement);
    }
}
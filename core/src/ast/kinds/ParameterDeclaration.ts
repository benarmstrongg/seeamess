import ts from "typescript";
import { AST, VariableDeclaration } from "ast";

export class ParameterDeclaration extends AST implements ts.ParameterDeclaration {
    _declarationBrand: ts.ParameterDeclaration['_declarationBrand'];
    name: ts.ParameterDeclaration['name'];
    kind: ts.ParameterDeclaration['kind'];
    parent: ts.ParameterDeclaration['parent'];
    initializer?: ts.ParameterDeclaration['initializer'];
    type?: ts.ParameterDeclaration['type'];
    questionToken?: ts.ParameterDeclaration['questionToken'];

    constructor(node: ts.ParameterDeclaration) {
        super(node);
        this.name = node.name;
        this.parent = node.parent;
        this.kind = node.kind;
        this.initializer = node.initializer;
        this.type = node.type;
        this.questionToken = node.questionToken;
    }

    get required(): boolean {
        return !this.questionToken;
    }

    getNames(): string[] {
        return AST.as(this as ts.Node as ts.VariableDeclaration, VariableDeclaration).getNames();
    }

    getNamesString(): string {
        return AST.as(this as ts.Node as ts.VariableDeclaration, VariableDeclaration).getNamesString();
    }

    getType(): string {
        return AST.as(this as ts.Node as ts.VariableDeclaration, VariableDeclaration).getType();
    }
}
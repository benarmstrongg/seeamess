import ts from "typescript";
import { ast, AST, VariableDeclaration } from "../../ast";

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
        return ast(this).to(VariableDeclaration).getNames();
    }

    getNamesString(): string {
        return ast(this).to(VariableDeclaration).getNamesString();
    }

    getType(): string {
        return ast(this).to(VariableDeclaration).getType();
    }
}
import ts from "typescript";
import { ast, AST, BindingName, Identifier } from "ast";

export class VariableDeclaration extends AST implements ts.VariableDeclaration {
    _declarationBrand: ts.VariableDeclaration['_declarationBrand'];
    name: ts.VariableDeclaration['name'];
    parent: ts.VariableDeclaration['parent'];
    kind: ts.VariableDeclaration['kind'];
    initializer?: ts.VariableDeclaration['initializer'];
    type?: ts.VariableDeclaration['type'];

    constructor(node: ts.VariableDeclaration) {
        super(node);
        this.name = node.name;
        this.parent = node.parent;
        this.kind = node.kind;
        this.initializer = node.initializer;
        this.type = node.type;
    }

    getNames(): string[] {
        return ast(this.name).to(BindingName).getNames();
    }

    getNamesString(): string {
        return ast(this.name).to(BindingName).getNamesString();
    }

    getType(): string {
        return (
            this.type && (
                ts.tokenToString(this.type.kind) ||
                (this.type['typeName'] && ast(this.type['typeName']).to(Identifier).text)
            )
        ) || 'any';
    }
}
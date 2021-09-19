import ts from "typescript";
import { ast, AST, Identifier, TypeElement } from "../../ast";

export class InterfaceDeclaration extends AST implements ts.InterfaceDeclaration {
    _declarationBrand;
    _statementBrand;
    name: ts.InterfaceDeclaration['name'];
    members: ts.InterfaceDeclaration['members'];
    kind: ts.InterfaceDeclaration['kind'];

    constructor(node: ts.InterfaceDeclaration) {
        super(node);
        this.name = node.name;
        this.members = node.members;
        this.kind = node.kind;
    }

    getName(): string {
        return ast(this.name).to(Identifier).text;
    }

    getTypeElements(): TypeElement[] {
        return this.members.map(m => ast(m).to(TypeElement));
    }

}
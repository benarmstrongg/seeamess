import ts from "typescript";
import { ASTNode, Identifier, TypeElement } from "ast";

export class InterfaceDeclaration extends ASTNode implements ts.InterfaceDeclaration {
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
        return ASTNode.as(this.name, Identifier).text;
    }

    getTypeElements(): TypeElement[] {
        return this.members.map(m => ASTNode.as(m, TypeElement));
    }

}
import ts from "typescript";
import { ASTNode, Identifier } from "ast";

export class TypeAliasDeclaration extends ASTNode implements ts.TypeAliasDeclaration {
    _statementBrand;
    _declarationBrand;
    name: ts.TypeAliasDeclaration['name'];
    type: ts.TypeAliasDeclaration['type'];
    kind: ts.TypeAliasDeclaration['kind'];

    constructor(node: ts.TypeAliasDeclaration) {
        super(node);
        this.name = node.name;
        this.type = node.type;
        this.kind = node.kind;
    }

    getName(): string {
        return ASTNode.as(this.name, Identifier).text;
    }
}
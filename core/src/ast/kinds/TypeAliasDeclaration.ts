import ts from "typescript";
import { AST, Identifier } from "ast";

export class TypeAliasDeclaration extends AST implements ts.TypeAliasDeclaration {
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
        return AST.as(this.name, Identifier).text;
    }
}
import ts from "typescript";
import { AST, Identifier } from "ast";
import { ast } from "ast/AST";

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
        const $name = ast(this.name).to(Identifier);
        return $name.text || $name.escapedText.toString();
    }
}
import ts from "typescript";
import { ASTNode } from "../ASTNode";
import { Identifier } from "./Identifier";

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
        return ASTNode.fromNode(this.name, Identifier).text;
    }
}
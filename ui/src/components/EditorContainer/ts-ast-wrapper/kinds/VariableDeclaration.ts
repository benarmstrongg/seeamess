import ts from "typescript";
import { ASTNode } from "../ASTNode";
import { BindingName } from "./BindingName";
import { Identifier } from "./Identifier";

export class VariableDeclaration extends ASTNode implements ts.VariableDeclaration {
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

    getNames(): string {
        return ASTNode.fromNode(this.name, BindingName).getNames();
    }

    getType(): string {
        return (
            this.type && (
                ts.tokenToString(this.type.kind) ||
                (this.type['typeName'] && ASTNode.fromNode(this.type['typeName'], Identifier).text)
            )
        ) || 'any';
    }
}
import ts from "typescript";
import { ASTNode } from "../ASTNode";
import { Identifier } from "./Identifier";

export class JsxAttribute extends ASTNode implements ts.JsxAttribute {
    _declarationBrand;
    _objectLiteralBrand;
    name: ts.JsxAttribute['name'];
    initializer?: ts.JsxAttribute['initializer'];
    parent: ts.JsxAttribute['parent'];
    kind: ts.JsxAttribute['kind'];

    constructor(node: ts.JsxAttribute) {
        super(node);
        this.name = node.name;
        this.initializer = node.initializer;
        this.parent = node.parent;
        this.kind = node.kind;
    }

    getName(): string {
        return ASTNode.fromNode(this.name, Identifier).text;
    }
}
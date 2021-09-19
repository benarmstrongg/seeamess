import ts from "typescript";
import { ast, AST, Identifier } from "../../ast";

export class JsxAttribute extends AST implements ts.JsxAttribute {
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
        return ast(this.name).to(Identifier).text;
    }
}
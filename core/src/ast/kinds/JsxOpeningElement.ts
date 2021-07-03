import ts from "typescript";
import { AST, JsxAttribute, Identifier, ast } from "ast";

export class JsxOpeningElement extends AST implements ts.JsxOpeningElement {
    _expressionBrand;
    tagName: ts.JsxOpeningElement['tagName'];
    attributes: ts.JsxOpeningElement['attributes'];
    parent: ts.JsxOpeningElement['parent'];
    kind: ts.JsxOpeningElement['kind'];

    constructor(node: ts.JsxOpeningElement) {
        super(node);
        this.tagName = node.tagName;
        this.attributes = node.attributes;
        this.parent = node.parent;
        this.kind = node.kind;
    }

    getTagName(): string {
        return ast(this.tagName).to(Identifier).text;
    }

    getAttributes(): (JsxAttribute)[] {
        return this.attributes.properties.map(p =>
            ts.isJsxSpreadAttribute(p) ?
                ast(p).to(JsxAttribute) :
                ast(p).to(JsxAttribute)
        );

    }
}
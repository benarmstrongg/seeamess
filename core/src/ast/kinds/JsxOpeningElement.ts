import ts from "typescript";
import { AST, JsxAttribute, Identifier } from "ast";

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
        return AST.as(this.tagName as any, Identifier).text;
    }

    getAttributes(): (JsxAttribute)[] {
        return this.attributes.properties.map(p =>
            ts.isJsxSpreadAttribute(p) ?
                AST.as(p as any, JsxAttribute) :
                AST.as(p, JsxAttribute)
        );

    }
}
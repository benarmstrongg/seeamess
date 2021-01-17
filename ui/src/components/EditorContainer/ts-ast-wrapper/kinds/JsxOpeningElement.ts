import ts from "typescript";
import { ASTNode } from "../ASTNode";
import { Identifier } from "./Identifier";
import { JsxAttribute } from "./JsxAttribute";

export class JsxOpeningElement extends ASTNode implements ts.JsxOpeningElement {
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
        return ASTNode.fromNode(this.tagName, Identifier).text;
    }

    getAttributes(): (JsxAttribute)[] {
        return this.attributes.properties.map(p =>
            ts.isJsxSpreadAttribute(p) ?
                ASTNode.fromNode(p, JsxAttribute) :
                ASTNode.fromNode(p, JsxAttribute)
        );

    }
}
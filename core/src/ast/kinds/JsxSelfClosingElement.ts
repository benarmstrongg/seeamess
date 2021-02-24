import ts from "typescript";
import { ASTNode } from "../ASTNode";
import { JsxOpeningElement } from "./JsxOpeningElement";

export class JsxSelfClosingElement extends ASTNode implements ts.JsxSelfClosingElement {
    _primaryExpressionBrand;
    _leftHandSideExpressionBrand;
    _unaryExpressionBrand;
    _updateExpressionBrand;
    _memberExpressionBrand;
    _expressionBrand;
    tagName: ts.JsxSelfClosingElement['tagName'];
    attributes: ts.JsxSelfClosingElement['attributes'];
    kind: ts.JsxSelfClosingElement['kind'];

    constructor(node: ts.JsxSelfClosingElement) {
        super(node);
        this.tagName = node.tagName;
        this.attributes = node.attributes;
        this.kind = node.kind;
    }

    getOpeningElement(): JsxOpeningElement {
        return ASTNode.as(this as ts.Node as ts.JsxOpeningElement, JsxOpeningElement);
    }


}
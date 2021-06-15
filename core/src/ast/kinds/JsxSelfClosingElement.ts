import ts from "typescript";
import { AST, JsxOpeningElement } from "ast";

export class JsxSelfClosingElement extends AST implements ts.JsxSelfClosingElement {
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
        return AST.as(this as ts.Node as ts.JsxOpeningElement, JsxOpeningElement);
    }


}
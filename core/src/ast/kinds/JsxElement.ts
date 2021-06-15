import ts from "typescript";
import { AST, JsxChild, JsxExpression, JsxFragment, JsxSelfClosingElement, JsxOpeningElement, JsxText } from "ast";

export class JsxElement extends AST implements ts.JsxElement {
    _expressionBrand;
    _primaryExpressionBrand;
    _memberExpressionBrand;
    _leftHandSideExpressionBrand;
    _unaryExpressionBrand;
    _updateExpressionBrand;
    openingElement: ts.JsxElement['openingElement'];
    children: ts.JsxElement['children'];
    closingElement: ts.JsxElement['closingElement'];
    kind: ts.JsxElement['kind'];

    constructor(node: ts.JsxElement) {
        super(node);
        this.openingElement = node.openingElement;
        this.children = node.children;
        this.closingElement = node.closingElement;
        this.kind = node.kind;
    }

    getOpeningElement(): JsxOpeningElement {
        return AST.as(this.openingElement, JsxOpeningElement);
    }

    getChildElements(): JsxChild[] {
        return this.children.map(c => {
            if (ts.isJsxSelfClosingElement(c)) {
                return AST.as(c, JsxSelfClosingElement);
            }
            if (ts.isJsxText(c)) {
                return AST.as(c, JsxText);
            }
            if (ts.isJsxElement(c)) {
                return AST.as(c, JsxElement);
            }
            if (ts.isJsxFragment(c)) {
                return AST.as(c, JsxFragment);
            }
            if (ts.isJsxExpression(c)) {
                return AST.as(c, JsxExpression);
            }
            return AST.from(c) as JsxChild;
        })
    }
}
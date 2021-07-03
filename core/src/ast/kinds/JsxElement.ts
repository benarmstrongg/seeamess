import ts from "typescript";
import { AST, JsxChild, JsxExpression, JsxFragment, JsxSelfClosingElement, JsxOpeningElement, JsxText, ast } from "ast";

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
        return ast(this.openingElement).to(JsxOpeningElement);
    }

    getChildElements(): JsxChild[] {
        return this.children.map(c => {
            if (ts.isJsxSelfClosingElement(c)) {
                return ast(c).to(JsxSelfClosingElement);
            }
            if (ts.isJsxText(c)) {
                return ast(c).to(JsxText);
            }
            if (ts.isJsxElement(c)) {
                return ast(c).to(JsxElement);
            }
            if (ts.isJsxFragment(c)) {
                return ast(c).to(JsxFragment);
            }
            if (ts.isJsxExpression(c)) {
                return ast(c).to(JsxExpression);
            }
            return ast(c) as JsxChild;
        })
    }
}
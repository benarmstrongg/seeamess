import ts from "typescript";
import { ASTNode, JsxChild, JsxExpression, JsxFragment, JsxSelfClosingElement, JsxOpeningElement, JsxText } from "ast";

export class JsxElement extends ASTNode implements ts.JsxElement {
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
        return ASTNode.as(this.openingElement, JsxOpeningElement);
    }

    getChildElements(): JsxChild[] {
        return this.children.map(c => {
            if (ts.isJsxSelfClosingElement(c)) {
                return ASTNode.as(c, JsxSelfClosingElement);
            }
            if (ts.isJsxText(c)) {
                return ASTNode.as(c, JsxText);
            }
            if (ts.isJsxElement(c)) {
                return ASTNode.as(c, JsxElement);
            }
            if (ts.isJsxFragment(c)) {
                return ASTNode.as(c, JsxFragment);
            }
            if (ts.isJsxExpression(c)) {
                return ASTNode.as(c, JsxExpression);
            }
            return ASTNode.from(c) as JsxChild;
        })
    }
}
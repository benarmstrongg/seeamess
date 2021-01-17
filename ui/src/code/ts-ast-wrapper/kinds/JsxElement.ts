import ts from "typescript";
import { ASTNode } from "../ASTNode";
import { JsxChild } from "./JsxChild";
import { JsxExpression } from "./JsxExpression";
import { JsxFragment } from "./JsxFragment";
import { JsxOpeningElement } from "./JsxOpeningElement";
import { JsxSelfClosingElement } from "./JsxSelfClosingElement";
import { JsxText } from "./JsxText";

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
        return ASTNode.fromNode(this.openingElement, JsxOpeningElement);
    }

    getChildElements(): JsxChild[] {
        return this.children.map(c => {
            if (ts.isJsxSelfClosingElement(c)) {
                return ASTNode.fromNode(c, JsxSelfClosingElement);
            }
            if (ts.isJsxText(c)) {
                return ASTNode.fromNode(c, JsxText);
            }
            if (ts.isJsxElement(c)) {
                return ASTNode.fromNode(c, JsxElement);
            }
            if (ts.isJsxFragment(c)) {
                return ASTNode.fromNode(c, JsxFragment);
            }
            if (ts.isJsxExpression(c)) {
                return ASTNode.fromNode(c, JsxExpression);
            }
            return ASTNode.fromNode(c) as JsxChild;
        })
    }
}
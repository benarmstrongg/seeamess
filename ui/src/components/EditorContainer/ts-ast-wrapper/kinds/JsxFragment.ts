import ts from "typescript";
import { ASTNode } from "../ASTNode";

export class JsxFragment extends ASTNode implements ts.JsxFragment {
    _expressionBrand;
    _updateExpressionBrand;
    _unaryExpressionBrand;
    _leftHandSideExpressionBrand;
    _memberExpressionBrand;
    _primaryExpressionBrand;
    openingFragment: ts.JsxFragment['openingFragment'];
    children: ts.JsxFragment['children'];
    closingFragment: ts.JsxFragment['closingFragment'];
    parent: ts.JsxFragment['parent'];
    kind: ts.JsxFragment['kind'];

    constructor(node: ts.JsxFragment) {
        super(node);
        this.openingFragment = node.openingFragment;
        this.children = node.children;
        this.closingFragment = node.closingFragment;
        this.parent = node.parent;
        this.kind = node.kind;
    }
}

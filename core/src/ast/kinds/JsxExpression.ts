import ts from "typescript";
import { AST } from "ast";

export class JsxExpression extends AST implements ts.JsxExpression {
    _expressionBrand;
    parent: ts.JsxExpression['parent'];
    kind: ts.JsxExpression['kind'];

    constructor(node: ts.JsxExpression) {
        super(node);
        this.parent = node.parent;
        this.kind = node.kind;
    }
}

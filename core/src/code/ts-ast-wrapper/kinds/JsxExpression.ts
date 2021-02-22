import ts from "typescript";
import { ASTNode } from "../ASTNode";

export class JsxExpression extends ASTNode implements ts.JsxExpression {
    _expressionBrand;
    parent: ts.JsxExpression['parent'];
    kind: ts.JsxExpression['kind'];

    constructor(node: ts.JsxExpression) {
        super(node);
        this.parent = node.parent;
        this.kind = node.kind;
    }
}

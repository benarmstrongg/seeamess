import ts from "typescript";
import { AST } from "../../ast";

export class Identifier extends AST implements ts.Identifier {
    _expressionBrand;
    _declarationBrand;
    _updateExpressionBrand;
    _unaryExpressionBrand;
    _leftHandSideExpressionBrand;
    _memberExpressionBrand;
    _primaryExpressionBrand;
    escapedText: ts.Identifier['escapedText'];
    text: ts.Identifier['text'];
    kind: ts.Identifier['kind'];

    constructor(node: ts.Identifier) {
        super(node);
        this.escapedText = node.escapedText;
        this.text = node.text;
        this.kind = node.kind;
    }
}
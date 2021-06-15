import ts from "typescript";
import { AST, PropertyAccessExpression } from "ast";

export class CallExpression extends AST implements ts.CallExpression {
    _leftHandSideExpressionBrand;
    _declarationBrand;
    _expressionBrand;
    _unaryExpressionBrand;
    _updateExpressionBrand;
    expression: ts.CallExpression['expression'];
    arguments: ts.CallExpression['arguments'];
    kind: ts.CallExpression['kind'];

    constructor(node: ts.CallExpression) {
        super(node);
        this.expression = node.expression;
        this.arguments = node.arguments;
        this.kind = node.kind;
    }

    getName(): string {
        if (ts.isIdentifier(this.expression)) {
            return this.expression.text;
        }
        if (ts.isPropertyAccessExpression(this.expression)) {
            return AST.as(this.expression, PropertyAccessExpression).getExpressionText();
        }
        return '';
    }

    getArguments(): AST[] {
        return this.arguments.map(AST.from);
    }
}
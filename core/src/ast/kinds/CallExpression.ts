import ts from "typescript";
import { ASTNode } from "../ASTNode";
import { PropertyAccessExpression } from "./PropertyAccessExpression";

export class CallExpression extends ASTNode implements ts.CallExpression {
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
            return ASTNode.as(this.expression, PropertyAccessExpression).getExpressionText();
        }
        return '';
    }

    getArguments(): ASTNode[] {
        return this.arguments.map(ASTNode.from);
    }
}
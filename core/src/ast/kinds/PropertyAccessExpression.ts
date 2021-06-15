import ts from 'typescript';
import { AST, Identifier } from 'ast';

export class PropertyAccessExpression extends AST implements ts.PropertyAccessExpression {
    _declarationBrand;
    _expressionBrand;
    _updateExpressionBrand;
    _unaryExpressionBrand;
    _leftHandSideExpressionBrand;
    _memberExpressionBrand;
    expression: ts.PropertyAccessExpression['expression'];
    name: ts.PropertyAccessExpression['name'];
    kind: ts.PropertyAccessExpression['kind'];

    constructor(node: ts.PropertyAccessExpression) {
        super(node);
        this.expression = node.expression;
        this.name = node.name;
        this.kind = node.kind;
    }

    getExpressionText(): string {
        const name = AST.as(this.name as ts.Identifier, Identifier).text;
        if (ts.isPropertyAccessExpression(this.expression)) {
            return `${AST.as(this.expression, PropertyAccessExpression).getExpressionText()}.${name}`
        }
        if (ts.isIdentifier(this.expression)) {
            return `${AST.as(this.expression, Identifier).text}.${name}`;
        }
        return '';
    }
}
import ts from 'typescript';
import { ast, AST, Identifier } from '../../ast';

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
        const name = ast(this.name).to(Identifier).text;
        if (ts.isPropertyAccessExpression(this.expression)) {
            return `${ast(this.expression).to(PropertyAccessExpression).getExpressionText()}.${name}`
        }
        if (ts.isIdentifier(this.expression)) {
            return `${ast(this.expression).to(Identifier).text}.${name}`;
        }
        return '';
    }
}
import { ASTNode } from '../ASTNode';
import ts from 'typescript';
import { Identifier } from './Identifier';

export class PropertyAccessExpression extends ASTNode implements ts.PropertyAccessExpression {
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
        const name = ASTNode.fromNode(this.name as ts.Identifier, Identifier).text;
        if (ts.isPropertyAccessExpression(this.expression)) {
            return `${ASTNode.fromNode(this.expression, PropertyAccessExpression).getExpressionText()}.${name}`
        }
        if (ts.isIdentifier(this.expression)) {
            return `${ASTNode.fromNode(this.expression, Identifier).text}.${name}`;
        }
        return '';
    }
}
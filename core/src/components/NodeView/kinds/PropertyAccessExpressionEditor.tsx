import React from 'react';
import ts from 'typescript';
import { Identifier, PropertyAccessExpression } from '../../../ast';
import { IStatementEditor } from "../../../types/StatementEditorProps";
import { NodeViewHeading } from '..';
import { IdentifierEditor } from './IdentifierEditor';
import { ASTNode } from '../../../ast/ASTNode';
import { Collapsible } from '../../';

interface PropertyAccessExpressionEditorProps {
    isTopLevel?: boolean;
}

export const PropertyAccessExpressionEditor: IStatementEditor<PropertyAccessExpression, PropertyAccessExpressionEditorProps> =
    ({ node, isTopLevel = true }) => {
        const renderExpression = () => {
            if (ts.isPropertyAccessExpression(node.expression)) {
                return <PropertyAccessExpressionEditor node={ASTNode.as(node.expression, PropertyAccessExpression)} isTopLevel={false} />
            }
            if (ts.isIdentifier(node.expression)) {
                return <IdentifierEditor node={ASTNode.as(node.expression, Identifier)} />;
            }
        }
        const renderName = () => (
            <IdentifierEditor node={ASTNode.as(node.name as Identifier, Identifier)} />
        );
        const collapsibleHeader = node.getExpressionText() || 'Property Access Expression';
        return (
            <span className="PropertyAccessExpressionEditor">
                {isTopLevel === true ? (
                    <Collapsible trigger={collapsibleHeader}>
                        <div>
                            <NodeViewHeading text="Property Access Expression" />
                        </div>
                        {renderExpression()}
                        {renderName()}
                    </Collapsible>
                ) : (
                        <>
                            {renderExpression()}
                            {renderName()}
                        </>
                    )
                }
            </span>
        );
    }
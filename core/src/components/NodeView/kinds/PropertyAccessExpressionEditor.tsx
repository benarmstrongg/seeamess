import React from 'react';
import ts from 'typescript';
import { Identifier, PropertyAccessExpression, AST } from 'ast';
import { IStatementEditor } from "types/StatementEditorProps";
import { IdentifierEditor } from 'components/nodeviews';
import { Collapsible, NodeViewHeading } from 'components';

interface PropertyAccessExpressionEditorProps {
    isTopLevel?: boolean;
}

export const PropertyAccessExpressionEditor: IStatementEditor<PropertyAccessExpression, PropertyAccessExpressionEditorProps> =
    ({ node, isTopLevel = true }) => {
        const renderExpression = () => {
            if (ts.isPropertyAccessExpression(node.expression)) {
                return <PropertyAccessExpressionEditor node={AST.as(node.expression, PropertyAccessExpression)} isTopLevel={false} />
            }
            if (ts.isIdentifier(node.expression)) {
                return <IdentifierEditor node={AST.as(node.expression, Identifier)} />;
            }
        }
        const renderName = () => (
            <IdentifierEditor node={AST.as(node.name as Identifier, Identifier)} />
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
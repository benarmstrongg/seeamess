import React from 'react';
import ts from 'typescript';
import { Identifier, PropertyAccessExpression, ast } from 'ast';
import { NodeFormComponent } from "../types";
import { IdentifierForm } from 'components/nodeviews';
import { Collapsible, NodeFormHeading } from 'components';

interface PropertyAccessExpressionEditorProps {
    isTopLevel?: boolean;
}

export const PropertyAccessExpressionForm: NodeFormComponent<PropertyAccessExpression, PropertyAccessExpressionEditorProps> =
    ({ node, isTopLevel = true }) => {
        const renderExpression = () => {
            if (ts.isPropertyAccessExpression(node.expression)) {
                return <PropertyAccessExpressionForm node={ast(node.expression).to(PropertyAccessExpression)} isTopLevel={false} />
            }
            if (ts.isIdentifier(node.expression)) {
                return <IdentifierForm node={ast(node.expression).to(Identifier)} />;
            }
        }
        const renderName = () => (
            <IdentifierForm node={ast(node.name as Identifier).to(Identifier)} />
        );
        const collapsibleHeader = node.getExpressionText() || 'Property Access Expression';
        return (
            <span className="PropertyAccessExpressionEditor">
                {isTopLevel === true ? (
                    <Collapsible trigger={collapsibleHeader}>
                        <div>
                            <NodeFormHeading text="Property Access Expression" />
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
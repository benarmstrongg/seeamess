import React from 'react';
import ts from 'typescript';
import { IStatementEditor } from "../../../../../types/StatementEditorProps";
import { Collapsible } from '../../../../Collapsible';
import { ASTNode } from '../../../../EditorContainer/ts-ast-wrapper/ASTNode';
import { Identifier } from '../../../../EditorContainer/ts-ast-wrapper/kinds/Identifier';
import { PropertyAccessExpression } from '../../../../EditorContainer/ts-ast-wrapper/kinds/PropertyAccessExpression';
import { StatementEditorTitle } from '../StatementEditorTitle';
import { IdentifierEditor } from './IdentifierEditor';

interface PropertyAccessExpressionEditorProps {
    isTopLevel?: boolean;
}

export const PropertyAccessExpressionEditor: IStatementEditor<PropertyAccessExpression, PropertyAccessExpressionEditorProps> =
    ({ node, isTopLevel = true }) => {
        const renderExpression = () => {
            if (ts.isPropertyAccessExpression(node.expression)) {
                return <PropertyAccessExpressionEditor node={ASTNode.fromNode(node.expression, PropertyAccessExpression)} isTopLevel={false} />
            }
            if (ts.isIdentifier(node.expression)) {
                return <IdentifierEditor node={ASTNode.fromNode(node.expression, Identifier)} />;
            }
        }
        const renderName = () => (
            <IdentifierEditor node={ASTNode.fromNode(node.name, Identifier)} />
        );
        const collapsibleHeader = node.getExpressionText() || 'Property Access Expression';
        return (
            <span className="PropertyAccessExpressionEditor">
                {isTopLevel === true ? (
                    <Collapsible trigger={collapsibleHeader}>
                        <div>
                            <StatementEditorTitle text="Property Access Expression" />
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
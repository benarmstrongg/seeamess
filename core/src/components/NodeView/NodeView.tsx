import React, { useCallback } from 'react';
import ts from 'typescript';
import { IStatementEditor } from "../../types/StatementEditorProps";
import { LiteralEditor, VariableDeclarationEditor, VariableDeclarationListEditor, BlockEditor, ReturnStatementEditor, ExpressionStatementEditor, CallExpressionEditor, BinaryExpressionEditor, IdentifierEditor, ImportDeclarationEditor, ImportClauseEditor, JsxElementEditor, JsxOpeningElementEditor, JsxAttributeEditor, ArrowFunctionEditor, JsxTextEditor, ExportAssignmentEditor, ExportDeclarationEditor, FunctionDeclarationEditor, FunctionExpressionEditor, InterfaceDeclarationEditor, JsxSelfClosingElementEditor, ParameterDeclarationEditor, PropertyAccessExpressionEditor, PropertySignatureEditor, TypeAliasDeclarationEditor, BindingPatternEditor, BindingElementEditor } from './kinds';

import { NodeInput } from '..';
import { NodeViewHeading } from '.';
import './styles.scss';
import { ASTNode, ArrayBindingPattern, ArrowFunction, BinaryExpression, BindingElement, Block, CallExpression, ExportAssignment, ExportDeclaration, ExpressionStatement, FunctionDeclaration, FunctionExpression, Identifier, ImportClause, ImportDeclaration, InterfaceDeclaration, JsxAttribute, JsxElement, JsxOpeningElement, JsxSelfClosingElement, JsxText, LiteralLikeNode, ObjectBindingPattern, ParameterDeclaration, PropertyAccessExpression, PropertySignature, ReturnStatement, TypeAliasDeclaration, VariableDeclaration, VariableDeclarationList } from '../../ast';

export const NodeView: IStatementEditor<any, { [prop: string]: any }> = (props) => {
    const { indent = false, border = false } = props;
    const node = props.node as ts.Node;
    const renderStatement = useCallback(() => {
        if (!node) {
            return <>no node</>;
        }
        function convertNode<T extends typeof ASTNode>(kind: T) {
            return ASTNode.as(node, kind);
        }
        if (node.kind === ts.SyntaxKind.FirstStatement) {
            return <NodeView node={node['declarationList']} />;
        }
        if (node.kind === ts.SyntaxKind.StringKeyword) {
            return <NodeInput placeholder="type" node={node} value="string" />;
        }


        if (ts.isExportAssignment(node)) {
            return <ExportAssignmentEditor node={convertNode(ExportAssignment)} />;
        }
        if (ts.isExportDeclaration(node)) {
            return <ExportDeclarationEditor node={convertNode(ExportDeclaration)} />;
        }


        if (ts.isVariableDeclarationList(node)) {
            return <VariableDeclarationListEditor node={convertNode(VariableDeclarationList)} />;
        }
        if (ts.isVariableDeclaration(node)) {
            return <VariableDeclarationEditor node={convertNode(VariableDeclaration)} />;
        }


        if (ts.isJsxElement(node)) {
            return <JsxElementEditor node={convertNode(JsxElement)} />;
        }
        if (ts.isJsxSelfClosingElement(node)) {
            return <JsxSelfClosingElementEditor node={convertNode(JsxSelfClosingElement)} />;
        }
        if (ts.isJsxAttribute(node)) {
            return <JsxAttributeEditor node={convertNode(JsxAttribute)} />;
        }
        if (ts.isJsxText(node)) {
            if (node.containsOnlyTriviaWhiteSpaces === true) {
                return null;
            }
            return <JsxTextEditor node={convertNode(JsxText)} />;
        }
        if (ts.isJsxOpeningElement(node)) {
            return <JsxOpeningElementEditor node={convertNode(JsxOpeningElement)} />;
        }


        if (ts.isParameter(node)) {
            return <ParameterDeclarationEditor node={convertNode(ParameterDeclaration)} />
        }
        if (ts.isFunctionDeclaration(node)) {
            return <FunctionDeclarationEditor node={convertNode(FunctionDeclaration)} />;
        }
        if (ts.isFunctionExpression(node)) {
            return <FunctionExpressionEditor node={convertNode(FunctionExpression)} />;
        }
        if (ts.isArrowFunction(node)) {
            return <ArrowFunctionEditor node={convertNode(ArrowFunction)} />;
        }
        if (ts.isBlock(node)) {
            return <BlockEditor node={convertNode(Block)} />;
        }
        if (ts.isReturnStatement(node)) {
            return <ReturnStatementEditor node={convertNode(ReturnStatement)} />;
        }


        if (ts.isExpressionStatement(node) || ts.isParenthesizedExpression(node) || ts.isJsxExpression(node)) {
            return <ExpressionStatementEditor node={convertNode(ExpressionStatement)} />;
        }
        if (ts.isCallExpression(node)) {
            return <CallExpressionEditor node={convertNode(CallExpression)} />;
        }
        if (ts.isBinaryExpression(node)) {
            return <BinaryExpressionEditor node={convertNode(BinaryExpression)} />;
        }


        if (ts.isIdentifier(node)) {
            return <IdentifierEditor node={convertNode(Identifier)} />;
        }


        if (ts.isImportDeclaration(node)) {
            return <ImportDeclarationEditor node={convertNode(ImportDeclaration)} />;
        }
        if (ts.isImportClause(node)) {
            return <ImportClauseEditor node={convertNode(ImportClause)} />;
        }


        if (ts.isLiteralExpression(node) || ts.isTypeLiteralNode(node)) {
            return <LiteralEditor node={convertNode(LiteralLikeNode)} />
        }


        if (ts.isTypeAliasDeclaration(node)) {
            return <TypeAliasDeclarationEditor node={convertNode(TypeAliasDeclaration)} />;
        }
        if (ts.isParenthesizedTypeNode(node)) {
            return <NodeView node={node.type} />;
        }


        if (ts.isPropertyAccessExpression(node)) {
            return <PropertyAccessExpressionEditor node={convertNode(PropertyAccessExpression)} />;
        }


        if (ts.isInterfaceDeclaration(node)) {
            return <InterfaceDeclarationEditor node={convertNode(InterfaceDeclaration)} />;
        }
        if (ts.isPropertySignature(node)) {
            return <PropertySignatureEditor node={convertNode(PropertySignature)} />;
        }


        if (ts.isArrayBindingPattern(node)) {
            return <BindingPatternEditor node={convertNode(ArrayBindingPattern)} />;
        }
        if (ts.isObjectBindingPattern(node)) {
            return <BindingPatternEditor node={convertNode(ObjectBindingPattern)} />;
        }
        if (ts.isBindingElement(node)) {
            return <BindingElementEditor node={convertNode(BindingElement)} />;
        }

        return <div style={{ background: 'red' }}><br /><br /><NodeViewHeading text={ts.SyntaxKind[node.kind]} /><br /><br /></div>
    }, [node])

    const style = {
        marginLeft: indent === true ? '5px' : '0',
        border: border === true ? '1px solid black' : 'none'
    };
    return (
        <span className="StatementEditor" style={style}>
            {renderStatement()}
        </span>
    );
}

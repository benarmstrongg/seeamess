import React, { useCallback } from 'react';
import ts from 'typescript';
import { NodeFormComponent } from "./types";
import { LiteralForm, VariableDeclarationForm, VariableDeclarationListForm, BlockForm, ReturnStatementForm, ExpressionStatementForm, CallExpressionForm, BinaryExpressionForm, IdentifierForm, ImportDeclarationForm, ImportClauseForm, JsxElementForm, JsxOpeningElementForm, JsxAttributeForm, ArrowFunctionForm, JsxTextForm, ExportAssignmentForm, ExportDeclarationForm, FunctionDeclarationForm, FunctionExpressionForm, InterfaceDeclarationForm, JsxSelfClosingElementForm, ParameterDeclarationForm, PropertyAccessExpressionForm, PropertySignatureForm, TypeAliasDeclarationForm, BindingPatternForm, BindingElementForm } from 'components/nodeviews';
import { NodeInput, NodeFormHeading } from 'components';
import { ast, ArrayBindingPattern, ArrowFunction, BinaryExpression, BindingElement, Block, CallExpression, ExportAssignment, ExportDeclaration, ExpressionStatement, FunctionDeclaration, FunctionExpression, Identifier, ImportClause, ImportDeclaration, InterfaceDeclaration, JsxAttribute, JsxElement, JsxOpeningElement, JsxSelfClosingElement, JsxText, LiteralLikeNode, ObjectBindingPattern, ParameterDeclaration, PropertyAccessExpression, PropertySignature, ReturnStatement, TypeAliasDeclaration, VariableDeclaration, VariableDeclarationList } from 'ast';
import './styles.scss';

export const NodeForm: NodeFormComponent<any, { [prop: string]: any }> = (props) => {
    const { indent = false, border = false } = props;
    const node = ast(props.node);
    const renderStatement = useCallback(() => {
        if (!node) {
            return <>no node</>;
        }


        if (node.kind === ts.SyntaxKind.FirstStatement) {
            return <NodeForm node={node['declarationList']} />;
        }
        if (node.kind === ts.SyntaxKind.StringKeyword) {
            return <NodeInput placeholder="type" node={node} value="string" />;
        }

        if (ts.isExportAssignment(node)) {
            return <ExportAssignmentForm node={node.to(ExportAssignment)} />;
        }
        if (ts.isExportDeclaration(node)) {
            return <ExportDeclarationForm node={node.to(ExportDeclaration)} />;
        }

        if (ts.isVariableDeclarationList(node)) {
            return <VariableDeclarationListForm node={node.to(VariableDeclarationList)} />;
        }
        if (ts.isVariableDeclaration(node)) {
            return <VariableDeclarationForm node={node.to(VariableDeclaration)} />;
        }


        if (ts.isJsxElement(node)) {
            return <JsxElementForm node={node.to(JsxElement)} />;
        }
        if (ts.isJsxSelfClosingElement(node)) {
            return <JsxSelfClosingElementForm node={node.to(JsxSelfClosingElement)} />;
        }
        if (ts.isJsxAttribute(node)) {
            return <JsxAttributeForm node={node.to(JsxAttribute)} />;
        }
        if (ts.isJsxText(node)) {
            if (node.containsOnlyTriviaWhiteSpaces === true) {
                return null;
            }
            return <JsxTextForm node={node.to(JsxText)} />;
        }
        if (ts.isJsxOpeningElement(node)) {
            return <JsxOpeningElementForm node={node.to(JsxOpeningElement)} />;
        }


        if (ts.isParameter(node)) {
            return <ParameterDeclarationForm node={node.to(ParameterDeclaration)} />
        }
        if (ts.isFunctionDeclaration(node)) {
            return <FunctionDeclarationForm node={node.to(FunctionDeclaration)} />;
        }
        if (ts.isFunctionExpression(node)) {
            return <FunctionExpressionForm node={node.to(FunctionExpression)} />;
        }
        if (ts.isArrowFunction(node)) {
            return <ArrowFunctionForm node={node.to(ArrowFunction)} />;
        }
        if (ts.isBlock(node)) {
            return <BlockForm node={node.to(Block)} />;
        }
        if (ts.isReturnStatement(node)) {
            return <ReturnStatementForm node={node.to(ReturnStatement)} />;
        }


        if (ts.isExpressionStatement(node) || ts.isParenthesizedExpression(node) || ts.isJsxExpression(node)) {
            return <ExpressionStatementForm node={node.to(ExpressionStatement)} />;
        }
        if (ts.isCallExpression(node)) {
            return <CallExpressionForm node={node.to(CallExpression)} />;
        }
        if (ts.isBinaryExpression(node)) {
            return <BinaryExpressionForm node={node.to(BinaryExpression)} />;
        }


        if (ts.isIdentifier(node)) {
            return <IdentifierForm node={node.to(Identifier)} />;
        }


        if (ts.isImportDeclaration(node)) {
            return <ImportDeclarationForm node={node.to(ImportDeclaration)} />;
        }
        if (ts.isImportClause(node)) {
            return <ImportClauseForm node={node.to(ImportClause)} />;
        }


        if (ts.isLiteralExpression(node) || ts.isTypeLiteralNode(node)) {
            return <LiteralForm node={node.to(LiteralLikeNode)} />
        }


        if (ts.isTypeAliasDeclaration(node)) {
            return <TypeAliasDeclarationForm node={node.to(TypeAliasDeclaration)} />;
        }
        if (ts.isParenthesizedTypeNode(node)) {
            return <NodeForm node={node.type} />;
        }


        if (ts.isPropertyAccessExpression(node)) {
            return <PropertyAccessExpressionForm node={node.to(PropertyAccessExpression)} />;
        }


        if (ts.isInterfaceDeclaration(node)) {
            return <InterfaceDeclarationForm node={node.to(InterfaceDeclaration)} />;
        }
        if (ts.isPropertySignature(node)) {
            return <PropertySignatureForm node={node.to(PropertySignature)} />;
        }


        if (ts.isArrayBindingPattern(node)) {
            return <BindingPatternForm node={node.to(ArrayBindingPattern)} />;
        }
        if (ts.isObjectBindingPattern(node)) {
            return <BindingPatternForm node={node.to(ObjectBindingPattern)} />;
        }
        if (ts.isBindingElement(node)) {
            return <BindingElementForm node={node.to(BindingElement)} />;
        }

        return <div style={{ background: 'red' }}><br /><br /><NodeFormHeading text={ts.SyntaxKind[node.kind]} /><br /><br /></div>
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

import React from 'react';
import ts from 'typescript';
import { IStatementEditor } from "../../../../../../types/StatementEditorProps";
import { LiteralEditor, VariableDeclarationEditor, VariableDeclarationListEditor, BlockEditor, ReturnStatementEditor, ExpressionStatementEditor, CallExpressionEditor, BinaryExpressionEditor, IdentifierEditor, ImportDeclarationEditor, ImportClauseEditor, JsxElementEditor, JsxOpeningElementEditor, JsxAttributeEditor, ArrowFunctionEditor, JsxTextEditor } from './kinds';
import { ExportAssignmentEditor } from './kinds/ExportAssignmentEditor';
import { ExportDeclarationEditor } from './kinds/ExportDeclarationEditor';
import { FunctionDeclarationEditor } from './kinds/FunctionDeclarationEditor';
import { FunctionExpressionEditor } from './kinds/FunctionExpressionEditor';
import { InterfaceDeclarationEditor } from './kinds/InterfaceDeclarationEditor';
import { JsxSelfClosingElementEditor } from './kinds/JsxSelfClosingElementEditor';
import { ParameterDeclarationEditor } from './kinds/ParameterDeclarationEditor';
import { PropertyAccessExpressionEditor } from './kinds/PropertyAccessExpressionEditor';
import { PropertySignatureEditor } from './kinds/PropertySignatureEditor';
import { TypeAliasDeclarationEditor } from './kinds/TypeAliasDeclarationEditor';
import { ASTNodeInput } from '../../../../../common/ASTNodeInput';
import { StatementEditorTitle } from './StatementEditorTitle';
import './styles.scss';
import { ASTNode, ConstructorOf } from '../../../../../../code/ts-ast-wrapper/ASTNode';
import { ExportAssignment } from '../../../../../../code/ts-ast-wrapper/kinds/ExportAssignment';
import { ExportDeclaration } from '../../../../../../code/ts-ast-wrapper/kinds/ExportDeclaration';
import { VariableDeclarationList } from '../../../../../../code/ts-ast-wrapper/kinds/VariableDeclarationList';
import { VariableDeclaration } from '../../../../../../code/ts-ast-wrapper/kinds/VariableDeclaration';
import { ParameterDeclaration } from '../../../../../../code/ts-ast-wrapper/kinds/ParameterDeclaration';
import { JsxElement } from '../../../../../../code/ts-ast-wrapper/kinds/JsxElement';
import { JsxSelfClosingElement } from '../../../../../../code/ts-ast-wrapper/kinds/JsxSelfClosingElement';
import { JsxAttribute } from '../../../../../../code/ts-ast-wrapper/kinds/JsxAttribute';
import { JsxText } from '../../../../../../code/ts-ast-wrapper/kinds/JsxText';
import { JsxOpeningElement } from '../../../../../../code/ts-ast-wrapper/kinds/JsxOpeningElement';
import { FunctionDeclaration } from '../../../../../../code/ts-ast-wrapper/kinds/FunctionDeclaration';
import { FunctionExpression } from '../../../../../../code/ts-ast-wrapper/kinds/FunctionExpression';
import { ArrowFunction } from '../../../../../../code/ts-ast-wrapper/kinds/ArrowFunction';
import { Block } from '../../../../../../code/ts-ast-wrapper/kinds/Block';
import { ReturnStatement } from '../../../../../../code/ts-ast-wrapper/kinds/ReturnStatement';
import { ExpressionStatement } from '../../../../../../code/ts-ast-wrapper/kinds/ExpressionStatement';
import { CallExpression } from '../../../../../../code/ts-ast-wrapper/kinds/CallExpression';
import { BinaryExpression } from '../../../../../../code/ts-ast-wrapper/kinds/BinaryExpression';
import { Identifier } from '../../../../../../code/ts-ast-wrapper/kinds/Identifier';
import { ImportDeclaration } from '../../../../../../code/ts-ast-wrapper/kinds/ImportDeclaration';
import { ImportClause } from '../../../../../../code/ts-ast-wrapper/kinds/ImportClause';
import { LiteralLikeNode } from '../../../../../../code/ts-ast-wrapper/kinds/LiteralLikeNode';
import { TypeAliasDeclaration } from '../../../../../../code/ts-ast-wrapper/kinds/TypeAliasDeclaration';
import { PropertyAccessExpression } from '../../../../../../code/ts-ast-wrapper/kinds/PropertyAccessExpression';
import { InterfaceDeclaration } from '../../../../../../code/ts-ast-wrapper/kinds/InterfaceDeclaration';
import { PropertySignature } from '../../../../../../code/ts-ast-wrapper/kinds/PropertySignature';

export const StatementEditor: IStatementEditor<any, { [prop: string]: any }> = (props) => {
    const { indent = false, border = false } = props;
    const node = props.node as ts.Node;
    const renderStatement = () => {
        if (!node) {
            return <>no node</>;
        }
        function convertNode<T extends ASTNode>(kind: ConstructorOf<T>) {
            return ASTNode.fromNode(node, kind);
        }
        if (node.kind === ts.SyntaxKind.FirstStatement) {
            return <StatementEditor node={node['declarationList']} />;
        }
        if (node.kind === ts.SyntaxKind.StringKeyword) {
            return <ASTNodeInput placeholder="type" node={node} value="string" />;
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
        if (ts.isParameter(node)) {
            return <ParameterDeclarationEditor node={convertNode(ParameterDeclaration)} />
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
            return <StatementEditor node={node.type} />;
        }
        if (ts.isPropertyAccessExpression(node)) {
            return <PropertyAccessExpressionEditor node={convertNode(PropertyAccessExpression)} />;
        }
        if (ts.isInterfaceDeclaration(node)) {
            return <InterfaceDeclarationEditor node={convertNode(InterfaceDeclaration)} />;
        }
        if (ts.isPropertySignature(node)) {
            return <PropertySignatureEditor node={convertNode(PropertySignature)} />
        }

        return <div style={{ background: 'red' }}><br /><br /><StatementEditorTitle text={ts.SyntaxKind[node.kind]} /><br /><br /></div>
    }

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

export const getStatementEditorKey = (statement: any, index: number) => {
    return `${statement.type}${index}`;
}
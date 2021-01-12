import { ASTNode } from 'jscodeshift';
import React from 'react';
import { IStatementEditor } from "../../../../types/StatementEditorProps";
import {
    ArrayPatternEditor,
    ArrowFunctionExpressionEditor,
    BinaryExpressionEditor,
    BlockStatementEditor,
    CallExpressionEditor,
    ExportDefaultDeclarationEditor,
    ExpressionStatementEditor,
    IdentifierEditor,
    ImportDeclarationEditor,
    ImportDefaultSpecifierEditor,
    ImportSpecifierEditor,
    JSXAttributeEditor,
    JSXElementEditor,
    JSXExpressionContainerEditor,
    JSXIdentifierEditor,
    JSXOpeningElementEditor,
    JSXTextEditor,
    LiteralEditor,
    LogicalExpressionEditor,
    ReturnStatementEditor,
    VariableDeclarationEditor,
    VariableDeclaratorEditor
} from './kinds';
import { StatementEditorTitle } from './StatementEditorTitle';
import './styles.scss';

export const StatementEditor: IStatementEditor<any, { [prop: string]: any }> = (props) => {
    const { node, indent = false, border = false } = props;
    console.log(props);
    const renderStatement = () => {
        if (!node)
            return <></>;
        switch ((node as ASTNode).type) {
            case 'ImportDeclaration':
                return <ImportDeclarationEditor  {...props} />;
            case 'VariableDeclaration':
                return <VariableDeclarationEditor {...props} />;
            case 'VariableDeclarator':
                return <VariableDeclaratorEditor {...props} />;
            case 'ImportSpecifier':
                return <ImportSpecifierEditor {...props} />;
            case 'ImportDefaultSpecifier':
                return <ImportDefaultSpecifierEditor  {...props} />;
            case 'Identifier':
                return <IdentifierEditor {...props} />;
            case 'StringLiteral':
            case 'NumericLiteral':
            case 'Literal':
                return <LiteralEditor {...props} />;
            case 'ArrowFunctionExpression':
            case 'FunctionDeclaration':
                return <ArrowFunctionExpressionEditor {...props} />
            case 'BlockStatement':
                return <BlockStatementEditor {...props} />;
            case 'ArrayPattern':
                return <ArrayPatternEditor {...props} />;
            case 'CallExpression':
                return <CallExpressionEditor {...props} />;
            case 'LogicalExpression':
                return <LogicalExpressionEditor {...props} />;
            case 'ReturnStatement':
                return <ReturnStatementEditor {...props} />;
            case 'JSXElement':
                return <JSXElementEditor {...props} />;
            case 'JSXOpeningElement':
                return <JSXOpeningElementEditor {...props} />;
            case 'JSXIdentifier':
                return <JSXIdentifierEditor  {...props} />
            case 'JSXText':
                return <JSXTextEditor {...props} />;
            case 'JSXAttribute':
                return <JSXAttributeEditor {...props} />;
            case 'JSXExpressionContainer':
                return <JSXExpressionContainerEditor {...props} />;
            case 'ExportDefaultDeclaration':
                return <ExportDefaultDeclarationEditor {...props} />;
            case 'ExpressionStatement':
                return <ExpressionStatementEditor {...props} />;
            case 'BinaryExpression':
                return <BinaryExpressionEditor {...props} />
        }

        return <div><br /><br /><StatementEditorTitle text={node.type} /><br /><br /></div>
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
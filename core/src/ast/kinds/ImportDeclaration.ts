import ts from "typescript";
import { ASTNode } from "ast";

export class ImportDeclaration extends ASTNode implements ts.ImportDeclaration {
    _statementBrand: ts.ImportDeclaration['_statementBrand'];
    moduleSpecifier: ts.ImportDeclaration['moduleSpecifier'];
    importClause?: ts.ImportDeclaration['importClause'];
    parent: ts.ImportDeclaration['parent'];
    kind: ts.ImportDeclaration['kind'];

    constructor(node: ts.ImportDeclaration) {
        super(node);
        this.moduleSpecifier = node.moduleSpecifier;
        this.importClause = node.importClause;
        this.parent = node.parent;
        this.kind = node.kind;
    }

    getModuleName(): string {
        return (ts.isStringLiteral(this.moduleSpecifier) && this.moduleSpecifier.text) || '';
    }
}
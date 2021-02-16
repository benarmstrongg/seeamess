import ts from "typescript";
import { ASTNode } from "../ASTNode";
import { ExportClause } from "./ExportClause";
import { Identifier } from "./Identifier";

export class ExportDeclaration extends ASTNode implements ts.ExportDeclaration {
    _declarationBrand;
    _statementBrand;
    isTypeOnly: ts.ExportDeclaration['isTypeOnly'];
    exportClause?: ts.ExportDeclaration['exportClause'];
    moduleSpecifier?: ts.ExportDeclaration['moduleSpecifier'];
    parent: ts.ExportDeclaration['parent'];
    kind: ts.ExportDeclaration['kind'];

    constructor(node: ts.ExportDeclaration) {
        super(node);
        this.isTypeOnly = node.isTypeOnly;
        this.exportClause = node.exportClause;
        this.moduleSpecifier = node.moduleSpecifier;
        this.parent = node.parent;
        this.kind = node.kind;
    }

    getExportClause(): ExportClause | undefined {
        return this.exportClause && ASTNode.as(this.exportClause, ExportClause);
    }

    getModuleName(): string | undefined {
        return this.moduleSpecifier && ASTNode.as(this.moduleSpecifier as ts.Identifier, Identifier).text;
    }
}
import ts from "typescript";
import { ast, AST, ExportClause, Identifier } from "../../ast";

export class ExportDeclaration extends AST implements ts.ExportDeclaration {
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
        return this.exportClause && ast(this.exportClause).to(ExportClause);
    }

    getModuleName(): string | undefined {
        return this.moduleSpecifier && ast(this.moduleSpecifier).to(Identifier).text;
    }
}
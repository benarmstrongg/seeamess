import ts from "typescript";
import { ast, AST, NamedImports, NamespaceImport } from "../../ast";

export class ImportClause extends AST implements ts.ImportClause {
    _declarationBrand;
    isTypeOnly: ts.ImportClause['isTypeOnly'];
    namedBindings?: ts.ImportClause['namedBindings'];
    name?: ts.ImportClause['name'];
    parent: ts.ImportClause['parent'];
    kind: ts.ImportClause['kind'];

    constructor(node: ts.ImportClause) {
        super(node);
        this.isTypeOnly = node.isTypeOnly;
        this.namedBindings = node.namedBindings;
        this.name = node.name;
        this.parent = node.parent;
        this.kind = node.kind;
    }

    getNamedBindings(): NamedImports | NamespaceImport | undefined {
        return this.namedBindings && (
            ts.isNamedImports(this.namedBindings) ?
                ast(this.namedBindings).to(NamedImports) :
                ast(this.namedBindings).to(NamespaceImport)
        );
    }
}
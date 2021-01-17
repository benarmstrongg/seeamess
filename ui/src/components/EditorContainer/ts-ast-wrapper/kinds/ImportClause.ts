import ts from "typescript";
import { ASTNode } from "../ASTNode";
import { NamedImports } from "./NamedImports";
import { NamespaceImport } from "./NamespaceImport";

export class ImportClause extends ASTNode implements ts.ImportClause {
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
                ASTNode.fromNode(this.namedBindings, NamedImports) :
                ASTNode.fromNode(this.namedBindings, NamespaceImport)
        );
    }
}
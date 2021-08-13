import ts from "typescript";
import { AST, ast } from "../../ast";

export class Block extends AST implements ts.Block {
    _statementBrand: ts.Block['_statementBrand'];
    statements: ts.Block['statements'];
    kind: ts.Block['kind'];

    constructor(node: ts.Block) {
        super(node);
        this.statements = node.statements;
        this.kind = node.kind;
    }

    getStatements(): AST[] {
        return this.statements.map(ast);
    }
}
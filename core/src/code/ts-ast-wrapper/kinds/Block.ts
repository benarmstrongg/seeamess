import ts from "typescript";
import { ASTNode } from "../ASTNode";

export class Block extends ASTNode implements ts.Block {
    _statementBrand: ts.Block['_statementBrand'];
    statements: ts.Block['statements'];
    kind: ts.Block['kind'];

    constructor(node: ts.Block) {
        super(node);
        this.statements = node.statements;
        this.kind = node.kind;
    }

    getStatements(): ASTNode[] {
        return this.statements.map(ASTNode.from);
    }
}
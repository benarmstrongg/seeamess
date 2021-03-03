import ts from "typescript";
import { ASTNode } from "ast";

export class LiteralLikeNode extends ASTNode implements ts.LiteralLikeNode {
    text: ts.LiteralLikeNode['text'];

    constructor(node: ts.LiteralLikeNode) {
        super(node);
        this.text = node.text;
    }
}
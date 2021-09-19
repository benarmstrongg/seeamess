import ts from "typescript";
import { AST } from "../../ast";

export class LiteralLikeNode extends AST implements ts.LiteralLikeNode {
    text: ts.LiteralLikeNode['text'];

    constructor(node: ts.LiteralLikeNode) {
        super(node);
        this.text = node.text;
    }
}
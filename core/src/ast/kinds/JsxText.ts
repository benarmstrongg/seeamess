import ts from "typescript";
import { AST } from "../../ast";

export class JsxText extends AST implements ts.JsxText {
    containsOnlyTriviaWhiteSpaces: ts.JsxText['containsOnlyTriviaWhiteSpaces'];
    text: ts.JsxText['text'];
    parent: ts.JsxText['parent'];
    kind: ts.JsxText['kind'];

    constructor(node: ts.JsxText) {
        super(node);
        this.containsOnlyTriviaWhiteSpaces = node.containsOnlyTriviaWhiteSpaces;
        this.text = node.text;
        this.parent = node.parent;
        this.kind = node.kind;
    }
}

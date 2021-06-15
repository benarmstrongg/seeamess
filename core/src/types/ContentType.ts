import ts from "typescript";
import { AST } from "ast";

export abstract class ContentType extends AST {
    abstract is(node: ts.Node): boolean;
}

// export interface IContentType extends ASTNode {
//     is(node: ts.Node): boolean;
// }
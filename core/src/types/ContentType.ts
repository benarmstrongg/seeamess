import ts from "typescript";
import { ASTNode } from "ast";

export abstract class ContentType extends ASTNode {
    abstract is(node: ts.Node): boolean;
}

// export interface IContentType extends ASTNode {
//     is(node: ts.Node): boolean;
// }
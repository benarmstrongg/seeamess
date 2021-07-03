import { AST } from "ast";

export interface IEditor<A extends AST = AST> {
    content: A;
}
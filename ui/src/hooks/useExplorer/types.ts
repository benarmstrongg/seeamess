import { AST, ASTConstructor } from "ast";

export interface IExplorer {
    content: Map<ASTConstructor<any>, AST[]>;
}
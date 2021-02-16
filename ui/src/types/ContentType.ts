import ts from "typescript";
import { ASTNode } from "../code/ts-ast-wrapper/ASTNode";

export abstract class ContentType extends ASTNode {
    abstract is(node: ts.Node): boolean;
}
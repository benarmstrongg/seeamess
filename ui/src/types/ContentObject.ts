import { ASTNode } from "../code/ts-ast-wrapper/ASTNode";

export interface ContentObject {
    contentType: string;
    objectName: string;
    containingFilePath: string;
    initialValue: string;
    value?: string;
    ast?: ASTNode;
}
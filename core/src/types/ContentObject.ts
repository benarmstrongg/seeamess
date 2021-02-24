import { ASTNode } from "../ast";

export interface ContentObject {
    contentType: string;
    objectName: string;
    containingFilePath: string;
    initialValue: string;
    value?: string;
    ast?: ASTNode;
}
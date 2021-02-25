import { FC, ReactElement } from "react";
import { ASTNode } from "../ast";
import { MonacoHelper } from "../internal/code/monaco-helper";
import { TSHelper } from "../internal/code/ts-helper";
import { ContentType } from "./ContentType";

type ContentTypeOrASTNode<T> =
    T extends ContentType ? T : (
        T extends ASTNode ? T : ASTNode
    );
export interface EditorProps<T extends (ContentType | ASTNode) = ContentType> {
    content: ContentTypeOrASTNode<T>[];
    update(objectName: string, value: ASTNode | string): void;
}


export interface IEditor<T extends (ContentType | ASTNode) = ASTNode> extends FC<EditorProps<T>> {
    button: ReactElement;
}


export interface EditorState {
    initialValue: string;
    monaco: MonacoHelper;
    filePath: string;
    tsHelper: TSHelper;
}
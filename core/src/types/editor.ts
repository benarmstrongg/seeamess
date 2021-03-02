import { FC, ReactElement } from "react";
import { MonacoHelper } from "../internal/code/monaco-helper";
import { TSHelper } from "../internal/code/ts-helper";
import { ContentType } from "./ContentType";

// type ContentTypeOrASTNode<T> = (
//     T extends ContentType ? T : (
//         T extends ASTNode ? T : ASTNode
//     )
// );



export interface IEditor extends FC {
    button: ReactElement;
    acceptedContentTypes?: typeof ContentType[]
}


export interface EditorState {
    initialValue: string;
    monaco: MonacoHelper;
    filePath: string;
    tsHelper: TSHelper;
}
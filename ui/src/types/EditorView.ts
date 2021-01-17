import { FC, ReactElement } from "react";
import { MonacoHelper } from "../code/monaco-helper";
import { ASTNode } from "../code/ts-ast-wrapper/ASTNode";
import { EditorInstance } from "./monaco";

export interface EditorViewProps {
    _initMonaco: () => void;
    editor: EditorInstance;
    ast?: ASTNode;
    filePath: string;
}


export interface IEditorView extends FC<EditorViewProps> {
    button: ReactElement;
}


export interface EditorViewState {
    initialValue: string;
    ast: ASTNode;
    monaco: MonacoHelper;
    filePath: string;
}
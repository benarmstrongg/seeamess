import { FC, ReactElement } from "react";
import { MonacoHelper } from "../components/EditorContainer/monacoHelper";
import { ASTCollection } from "./jscodeshift";
import { EditorInstance } from "./monaco";

export interface EditorViewProps {
    _initMonaco?: () => void;
    editor?: EditorInstance;
    ast?: ASTCollection;
    filePath: string;
}


export interface IEditorView extends FC<EditorViewProps> {
    button: ReactElement;
}


export interface EditorViewState {
    initialValue: string;
    ast: ASTCollection;
    monaco: MonacoHelper;
    filePath: string;
}
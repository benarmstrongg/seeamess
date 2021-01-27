import { FC, ReactElement } from "react";
import { MonacoHelper } from "../code/monaco-helper";
import { TSHelper } from "../code/ts-helper";

export interface EditorViewProps {
}


export interface IEditorView extends FC<EditorViewProps> {
    button: ReactElement;
}


export interface EditorViewState {
    initialValue: string;
    monaco: MonacoHelper;
    filePath: string;
    tsHelper: TSHelper;
}
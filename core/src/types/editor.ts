import { FC, ReactElement } from "react";
import { MonacoHelper } from "../internal/code/monaco-helper";
import { TSHelper } from "../internal/code/ts-helper";

export interface EditorProps {
}


export interface IEditor extends FC<EditorProps> {
    button: ReactElement;
}


export interface EditorState {
    initialValue: string;
    monaco: MonacoHelper;
    filePath: string;
    tsHelper: TSHelper;
}
import { FC, ReactElement } from "react";
// import { MonacoHelper } from "internal/code/monaco-helper";
// import { TSHelper } from "internal/code/ts-helper";
import { ASTConstructor } from "ast";


export interface ContentEditor extends FC {
    button: ReactElement;
    contentTypes: ASTConstructor<any>[];
    ignoreSourceFiles?: boolean;
}

// export interface IEditorState {
//     initialValue: string;
//     monaco: MonacoHelper;
//     filePath: string;
//     tsHelper: TSHelper;
// }
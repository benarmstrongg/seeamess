import { AST } from "../../ast";
import { EditorInstance, TSWorker } from "../../types";

export interface IEditor<A extends AST = AST> {
    content: A;
    editor: EditorInstance;
    languageService: TSWorker;
}
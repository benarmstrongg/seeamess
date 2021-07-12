import { AST } from "ast";
import { EditorInstance, TSWorker } from "types/monaco";

export interface IEditor<A extends AST = AST> {
    content: A;
    editor: EditorInstance;
    languageService: TSWorker;
}
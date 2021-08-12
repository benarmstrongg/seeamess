import { AST } from "ast";
import { IProject } from "hooks/useProject/types";
import { EditorInstance, Monaco, TSWorker } from "types/monaco";

export const createEditorInstance = (monaco: Monaco, content: AST): EditorInstance => {
    const elem = document.createElement('div');
    const editor = monaco.editor.create(elem, {
        model: monaco.editor.createModel(content.getText(), 'typescript'), //, uri),
        theme: 'vs-light'
    });
    // TODO
    editor.onDidChangeModelContent(_ => { })
    return editor;
}

export const createLanguageService = async (monaco: Monaco, files: IProject['files']): Promise<TSWorker> => {
    const uris = Array.from(files.values()).map(f => monaco.Uri.file(`file://${f.path}`));
    const factory = await monaco.languages.typescript.getTypeScriptWorker();
    return await factory(...uris);
}
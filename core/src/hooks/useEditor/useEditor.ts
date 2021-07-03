import { AST, ASTConstructor } from "ast";
import { useContext } from "react";
import { EditorContext } from "./EditorContext";
import { IEditor } from "./types";

export const useEditor = <A extends AST>(contentType?: ASTConstructor<A>): IEditor<A> => {
    const editor = useContext(EditorContext);
    let content: A | undefined = editor.content as A;
    if (!contentType) {
        return editor as IEditor<A>;
    }
    if (editor.content.is(contentType)) {
        content = editor.content.to(contentType);
    }
    else {
        content = editor.content.find(contentType);;
    }
    if (!content) {
        throw new Error(`Cannot cast content of type ${editor.content.kindString} to ${contentType.name} and cannot find ${contentType.name} within ${editor.content.kindString} instance.`);
    }
    return { ...editor, content };
}
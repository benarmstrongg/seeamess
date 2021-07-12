import React, { FC, useEffect, useState } from "react";
import { EditorContext } from "./EditorContext";
import { ContentEditor } from "types";
import { AST, SourceFile } from "ast";
import { IEditor } from "./types";
import { useProject } from "hooks";
import { createEditorInstance, createLanguageService } from "./util";
import { Spinner } from "components";

interface EditorProviderProps {
    contentEditor: ContentEditor;
    obj: AST;
}

export const EditorProvider: FC<EditorProviderProps> = ({ children, contentEditor, obj }) => {
    const { monaco, files } = useProject();
    const [editor, setEditor] = useState<IEditor['editor']>();
    const [content, setContent] = useState<IEditor['content']>();
    const [languageService, setLanguageSerrvice] = useState<IEditor['languageService']>();
    const { contentTypes, ignoreSourceFiles } = contentEditor;

    useEffect(() => {
        const editor = createEditorInstance(monaco, obj);
        setEditor(editor);
        createLanguageService(monaco, files).then(setLanguageSerrvice);
        return editor.dispose;
    }, [monaco, obj, files]);

    useEffect(() => {
        for (const contentType of contentTypes) {
            if (obj.is(contentType)) {
                return setContent(obj.to(contentType));
            }
        }
        if (!ignoreSourceFiles && obj.is(SourceFile)) {
            for (const contentType of contentTypes) {
                if (obj.find(contentType)) {
                    return setContent(obj.to(SourceFile));
                }
            }
        }
    }, [contentTypes, ignoreSourceFiles, obj]);

    if (!content || !editor || !languageService) {
        return <Spinner />;
    }

    return (
        <EditorContext.Provider value={{ content, editor, languageService }}>
            {children}
        </EditorContext.Provider>
    );
}
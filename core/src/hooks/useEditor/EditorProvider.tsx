import React, { FC, useEffect, useState } from "react";
import { EditorContext } from "./EditorContext";
import { ContentEditor } from "types";
import { AST, SourceFile } from "ast";
import { IEditor } from "./types";

interface EditorProviderProps {
    contentEditor: ContentEditor;
    obj: AST;
}

export const EditorProvider: FC<EditorProviderProps> = ({ children, contentEditor, obj }) => {
    const [content, setContent] = useState<IEditor['content']>();
    const { contentTypes, ignoreSourceFiles } = contentEditor;

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

    if (!content) {
        return null;
    }

    return (
        <EditorContext.Provider value={{
            content
        }}>
            {children}
        </EditorContext.Provider>
    );
}
import React, { useEffect, useRef } from 'react';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { useEditor, ContentEditor, AST } from '@seeamess/core';

export const CodeEditor: ContentEditor = () => {
    const elemRef = useRef<HTMLDivElement>(null);
    const { editor } = useEditor();

    useEffect(() => {
        if (elemRef.current) {
            const container = editor.getContainerDomNode();
            elemRef.current.replaceWith(container);
            const editorSection = document.querySelector('.editor-section');
            if (editorSection) {
                editor.layout(editorSection.getBoundingClientRect());
            }
        }
    }, [elemRef, editor]);

    return (
        <div ref={elemRef} />
    )
}

CodeEditor.icon = <RiCodeSSlashLine />;

CodeEditor.contentTypes = [AST];
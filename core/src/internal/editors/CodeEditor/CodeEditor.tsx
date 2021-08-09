import React, { useEffect, useRef } from 'react';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { useEditor } from 'hooks';
import { ContentEditor } from 'types/editor';
import { AST } from 'ast';


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

CodeEditor.button = (<RiCodeSSlashLine />);

CodeEditor.contentTypes = [AST];
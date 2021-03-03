import React from 'react';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { useEditor } from 'hooks';
import { IEditor } from 'types/editor';
import './styles.scss';


export const CodeEditor: IEditor = () => {
    const { content } = useEditor();
    const filePath = content.sourceFile.fileName;
    return (
        <div data-filepath={filePath} style={{ height: '90vh' }}></div>
    )
}

CodeEditor.button = (<><RiCodeSSlashLine />&nbsp;Code</>);
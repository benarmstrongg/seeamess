import React from 'react';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { useEditor } from '../../../hooks';
import { IEditor } from '../../../types/editor';
import './styles.scss';


export const CodeEditorView: IEditor = () => {
    const { filePath } = useEditor();
    return (
        <div data-filepath={filePath} style={{ height: '90vh' }}></div>
    )
}

CodeEditorView.button = (<><RiCodeSSlashLine />&nbsp;Code</>);

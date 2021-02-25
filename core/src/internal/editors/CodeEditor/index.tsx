import React from 'react';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { IEditor } from '../../../types/editor';
import './styles.scss';


export const CodeEditorView: IEditor = ({ content }) => {
    const filePath = content[0].sourceFile.fileName;
    return (
        <div data-filepath={filePath} style={{ height: '90vh' }}></div>
    )
}

CodeEditorView.button = (<><RiCodeSSlashLine />&nbsp;Code</>);

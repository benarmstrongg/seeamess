import React from 'react';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { IEditorView } from '../../../types/EditorView';
import './styles.scss';


export const CodeEditorView: IEditorView = ({ filePath }) => {
    return (
        <div data-filepath={filePath} style={{ height: '90vh' }}></div>
    )
}

CodeEditorView.button = (<><RiCodeSSlashLine />&nbsp;Code</>);

import React from 'react';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { useEditor } from '../../../../context';
import { IEditorView } from '../../../../types/EditorView';
import './styles.scss';


export const CodeEditorView: IEditorView = () => {
    const { filePath } = useEditor();
    return (
        <div data-filepath={filePath} style={{ height: '90vh' }}></div>
    )
}

CodeEditorView.button = (<><RiCodeSSlashLine />&nbsp;Code</>);

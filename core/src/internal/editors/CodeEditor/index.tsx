import React from 'react';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { withContent } from '../../../hooks';
import { IEditor } from '../../../types/editor';
import { JavascriptFile } from '../../content-types/JavascriptFile';
import './styles.scss';


const _CodeEditor: IEditor = ({ content }) => {
    console.log(content);
    const filePath = content[0].sourceFile.fileName;
    return (
        <div data-filepath={filePath} style={{ height: '90vh' }}></div>
    )
}

_CodeEditor.button = (<><RiCodeSSlashLine />&nbsp;Code</>);

export const CodeEditor = withContent(JavascriptFile, _CodeEditor);
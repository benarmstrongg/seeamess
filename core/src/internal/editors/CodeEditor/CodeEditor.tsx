import React from 'react';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { useTabs } from 'hooks';
import { ContentEditor } from 'types/editor';
import './styles.scss';
import { AST } from 'ast';


export const CodeEditor: ContentEditor = () => {
    const { activeTab } = useTabs();
    const filePath = activeTab.sourceFile.fileName;
    return (
        <div data-filepath={filePath} style={{ height: '90vh' }}></div>
    )
}

CodeEditor.button = (<><RiCodeSSlashLine />&nbsp;Code</>);

CodeEditor.contentTypes = [AST];
import React from 'react';
import { IEditor } from 'types/editor';
import { FaReact } from 'react-icons/fa';
import { ReactFunctionComponent } from '../../content-types/FC';
import { EditorArea } from './EditorArea/ComponentEditorArea';
import { ComponentInfoPanel } from './ComponentInfoPanel/ComponentInfoPanel';
import { useEditor } from 'hooks';
import { ASTNode } from 'ast';
import { JavascriptFile } from 'internal/content-types/JavascriptFile';
import './styles.scss';

export const ReactComponentEditor: IEditor = () => {
    const { content } = useEditor(ReactFunctionComponent);
    let component;

    if (ASTNode.is(content, JavascriptFile)) {
        component = content.find({}, ReactFunctionComponent);
    }
    else {
        component = content;
    }

    return (
        <div className="ReactComponentEditor">
            <ComponentInfoPanel component={component} />
            <EditorArea component={component} />
        </div>
    );
}

ReactComponentEditor.button = (
    <>
        <FaReact />
        <>&nbsp;React</>
    </>
);

ReactComponentEditor.acceptedContentTypes = [];
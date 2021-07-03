import React from 'react';
import { ContentEditor } from 'types/editor';
import { FaReact } from 'react-icons/fa';
import { ReactFunctionComponent } from '../../content-types/FC';
import { EditorArea } from './EditorArea/ComponentEditorArea';
import { ComponentInfoPanel } from './ComponentInfoPanel/ComponentInfoPanel';
import { useEditor } from 'hooks';
import './styles.scss';

export const ReactComponentEditor: ContentEditor = () => {
    const { content } = useEditor(ReactFunctionComponent);

    if (!content) {
        return (<>No comp</>);
    }

    console.log(content);

    return (
        <div className="ReactComponentEditor">
            <ComponentInfoPanel component={content} />
            <EditorArea component={content} />
        </div>
    );
}

ReactComponentEditor.button = (
    <>
        <FaReact />
        <>&nbsp;React</>
    </>
);

ReactComponentEditor.contentTypes = [ReactFunctionComponent];
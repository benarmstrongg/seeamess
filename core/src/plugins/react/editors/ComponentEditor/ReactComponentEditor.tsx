import React from 'react';
import { ContentEditor } from 'types/editor';
import { FaReact } from 'react-icons/fa';
import { ReactFunctionComponent } from '../../content-types/FC';
import { EditorArea } from './EditorArea/ComponentEditorArea';
import { ComponentInfoPanel } from './ComponentInfoPanel/ComponentInfoPanel';
import { useEditor } from 'hooks';
import styled from 'styled-components';

export const ReactComponentEditor: ContentEditor = () => {
    const { content } = useEditor(ReactFunctionComponent);

    if (!content) {
        return (<>No comp</>);
    }

    // console.log(content);

    return (
        <Container>
            <ComponentInfoPanel component={content} />
            <EditorArea component={content} />
        </Container>
    );
}

ReactComponentEditor.icon = <FaReact />;

ReactComponentEditor.contentTypes = [ReactFunctionComponent];

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;  
`;
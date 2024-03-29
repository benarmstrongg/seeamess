import React, { FC, useState } from "react";
import styled from 'styled-components';
import mockEditors from '__tmp/mock-editors';
import { EditorProvider, useProject, AST, SourceFile, EditorButton, ContentEditor } from '@seeamess/core';

interface EditorContainerProps {
    obj: AST;
}

export const EditorContainer: FC<EditorContainerProps> = ({ obj }) => {
    const { config } = useProject();
    const [activeIndex, setActiveIndex] = useState(0);
    const editors: ContentEditor[] = config.editors
        .map(e => mockEditors[e])
        .filter((e: ContentEditor) => {
            for (const contentType of e.contentTypes) {
                if (!e.ignoreSourceFiles && obj.is(SourceFile) && !!obj.find(contentType)) {
                    return true;
                }
                if (obj.is(contentType)) {
                    return true;
                }
            }
            return false;
        });


    return (
        <Container>
            <div className="buttons">
                {editors.map((Editor, i) => (
                    <EditorButton
                        key={Editor.name.concat('Button')}
                        active={activeIndex === i}
                        onClick={() => setActiveIndex(i)}
                    >
                        {Editor.icon}
                    </EditorButton>
                ))}
            </div>
            <div className="editor-area">
                {editors.map((Editor, i) => (
                    <EditorProvider
                        key={Editor.name}
                        contentEditor={Editor}
                        obj={obj}
                    >
                        <div className="editor" hidden={activeIndex !== i}>
                            <Editor />
                        </div>
                    </EditorProvider>
                ))}
            </div>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    height: 100%;

    .editor-area {
        height: inherit;
        overflow-y: scroll;
    }

    .buttons {
        display: flex;
    }
`;
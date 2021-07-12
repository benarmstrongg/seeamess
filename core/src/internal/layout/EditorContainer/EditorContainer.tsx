import React, { FC, useState } from "react";
import { ContentEditor } from "types/editor";
import { EditorButton } from "components";
import styled from 'styled-components';
import { AST, SourceFile } from "ast";
import { useProject } from "hooks";
import mockEditors from '__tmp/mock-editors';
import { EditorProvider } from "hooks/useEditor";

interface EditorContainerProps {
    obj: AST;
}

export const EditorContainer: FC<EditorContainerProps> = ({ obj }) => {
    const { config } = useProject();
    const [activeIndex, setActiveIndex] = useState(0);
    const editors: ContentEditor[] = config.editors
        .reduce<string[]>((_editors, editor) => {
            const coreEditors = ['code', 'statement'];
            if (coreEditors.includes(editor)) {
                return [..._editors, editor];
            }
            return [editor, ..._editors];
        }, [])
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
                        {Editor.button}
                    </EditorButton>
                ))}
            </div>
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
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    height: 100%;
`;
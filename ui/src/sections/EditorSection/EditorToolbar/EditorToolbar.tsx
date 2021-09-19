import React, { FC, ReactElement } from "react";
import { EditorButton } from "@seeamess/core";
import styled from 'styled-components';

interface EditorToolBarProps {
    buttons: ReactElement[];
    setActiveEditor: (index: number) => void;
    activeEditor: number;
}

export const EditorToolbar: FC<EditorToolBarProps> = ({ buttons, setActiveEditor, activeEditor }) => {
    return (
        <Container>
            {buttons.map((button, i) => (
                <EditorButton
                    key={'button' + i}
                    active={activeEditor === i}
                    onClick={() => setActiveEditor(i)}
                >
                    {button}
                </EditorButton>
            ))}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 5px;
`;
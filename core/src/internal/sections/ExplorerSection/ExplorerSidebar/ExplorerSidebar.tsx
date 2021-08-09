import { EditorButton } from "components";
import React, { FC } from "react";
import styled from "styled-components";
import { ContentExplorer } from "types";

interface ExplorerSidebarProps {
    explorers: ContentExplorer[];
    activeIndex: number;
    setActiveIndex: (i: number) => void;
}

export const ExplorerSidebar: FC<ExplorerSidebarProps> = ({ explorers, activeIndex, setActiveIndex }) => (
    <Container>
        {explorers.map((Explorer, i) => (
            <EditorButton
                key={Explorer.name.concat('Button')}
                active={activeIndex === i}
                onClick={() => setActiveIndex(i)}
            >
                {Explorer.icon}
            </EditorButton>
        ))}
    </Container>
);

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
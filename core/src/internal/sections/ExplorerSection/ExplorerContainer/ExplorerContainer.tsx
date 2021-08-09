import { ExplorerProvider } from "hooks/useExplorer";
import React, { FC } from "react";
import styled from "styled-components";
import { ContentExplorer } from "types";

interface ExplorerContainerProps {
    explorers: ContentExplorer[];
    activeIndex: number;
}

export const ExplorerContainer: FC<ExplorerContainerProps> = ({ explorers, activeIndex }) => (
    <Container>
        {explorers.map((Explorer, i) => (
            <div hidden={activeIndex !== i} key={Explorer.name}>
                <ExplorerProvider contentExplorer={Explorer} >
                    <Explorer />
                </ExplorerProvider>
            </div>
        ))}
    </Container>
);

const Container = styled.div`
    width: 100%;
    margin-left: -4px;
`;
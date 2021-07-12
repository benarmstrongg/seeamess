import React, { FC } from "react";
import styled from 'styled-components';
import { useProject } from "hooks";
import mockExplorers from '__tmp/mock-explorers';
import { ContentExplorer } from "types";
import { ExplorerProvider } from "hooks/useExplorer";


export const ExplorerSection: FC = () => {
    const { config } = useProject();
    const explorers: ContentExplorer[] = config.explorers.map(e => mockExplorers[e]);

    return (
        <Container>
            {explorers.map(Explorer => (
                <ExplorerProvider contentExplorer={Explorer} key={Explorer.name}>
                    <Explorer />
                </ExplorerProvider>
            ))}
        </Container>
    );
}

const Container = styled.div`
    height: 100%;
    width: 15%;
`;
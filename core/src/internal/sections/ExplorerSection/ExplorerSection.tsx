import React, { FC, useState } from "react";
import styled from 'styled-components';
import { useProject } from "hooks";
import mockExplorers from '__tmp/mock-explorers';
import { ContentExplorer } from "types";
import { ExplorerSidebar } from "./ExplorerSidebar/ExplorerSidebar";
import { ExplorerContainer } from "./ExplorerContainer/ExplorerContainer";


export const ExplorerSection: FC = () => {
    const { config } = useProject();
    const explorers: ContentExplorer[] = config.explorers.map(e => mockExplorers[e]);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Container>
            <div className="fixed-wrapper">
                <ExplorerSidebar explorers={explorers} activeIndex={activeIndex} setActiveIndex={i => setActiveIndex(i)} />
                <ExplorerContainer explorers={explorers} activeIndex={activeIndex} />
            </div>
        </Container>
    );
}

const Container = styled.div`
    width: 20%;
    height: 100%;

    .fixed-wrapper {
        display: flex;
        flex-direction: row;
        overflow-x: hidden;
        width: 100%;
    }
`;
import React, { FC } from 'react';
import { TunnelProvider, ProjectProvider, TabsProvider } from '@seeamess/core';
import { ExplorerSection, EditorSection } from 'sections';
import styled from 'styled-components';

const App: FC = () => (
    <Container>
        <AppProvider>
            <ExplorerSection />
            <EditorSection />
        </AppProvider>
    </Container>
);

const Container = styled.div`
    width: 98vw;
    height: 98vh;
    display: flex;
    flex-direction: row;
    font-family: Tahoma, sans-serif;
`;

const AppProvider: FC = ({ children }) => (
    <TunnelProvider>
        <ProjectProvider>
            <TabsProvider>
                {children}
            </TabsProvider>
        </ProjectProvider>
    </TunnelProvider>
);

export default App;

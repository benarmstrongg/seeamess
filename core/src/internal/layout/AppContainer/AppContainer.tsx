import React, { FC } from "react"
import { ExplorerSection, EditorSection } from "internal/sections";
import { TabsProvider, TunnelProvider, ProjectProvider } from "hooks";
import styled from 'styled-components';

export const AppContainer: FC = () => {
    const AppProvider: FC = ({ children }) => (
        <TunnelProvider>
            <ProjectProvider>
                <TabsProvider>
                    {children}
                </TabsProvider>
            </ProjectProvider>
        </TunnelProvider>
    );
    return (
        <Container>
            <AppProvider>
                <ExplorerSection />
                <EditorSection />
            </AppProvider>
        </Container>
    );
}

const Container = styled.div`
    width: 98vw;
    height: 98vh;
    display: flex;
    flex-direction: row;
    font-family: Tahoma, sans-serif;
`;
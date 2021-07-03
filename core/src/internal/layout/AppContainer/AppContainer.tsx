import React, { FC } from "react"
import { ExplorerSection, EditorSection } from "internal/sections";
import { TabsProvider, TunnelProvider, ProjectProvider } from "hooks";
import './styles.scss';

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
        <div className="AppContainer">
            <AppProvider>
                <ExplorerSection />
                <EditorSection />
            </AppProvider>
        </div >
    );
}
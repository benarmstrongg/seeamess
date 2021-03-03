import React, { FC } from "react"
import { ExplorerSection, EditorSection } from "internal/sections";
import { ContentProvider, TabsProvider, FilesProvider, TunnelProvider, SeeamessConfigProvider } from "hooks";
import './styles.scss';

export const AppContainer: FC = () => {
    const AppProvider: FC = ({ children }) => (
        <SeeamessConfigProvider>
            <TunnelProvider>
                <TabsProvider>
                    <FilesProvider>
                        <ContentProvider>
                            {children}
                        </ContentProvider>
                    </FilesProvider>
                </TabsProvider>
            </TunnelProvider>
        </SeeamessConfigProvider>
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
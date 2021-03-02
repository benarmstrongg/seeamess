import React, { FC } from "react"
import { EditorSection } from "../../sections/EditorSection";
import './styles.scss';
import { ExplorerSection } from "../../sections/ExplorerSection";
import { SeeamessConfigProvider } from "../../../hooks/useConfig";
import { TunnelProvider } from "../../../hooks/useTunnel";
import { FilesProvider } from "../../../hooks/useFiles";
import { ContentProvider, TabsProvider } from "../../../hooks";

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
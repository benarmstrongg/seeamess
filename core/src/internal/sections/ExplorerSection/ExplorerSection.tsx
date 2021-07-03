import React, { FC } from "react";
import './styles.scss';
import { useProject } from "hooks";
import mockExplorers from '__tmp/mock-explorers';
import { ContentExplorer } from "types";
import { ExplorerProvider } from "hooks/useExplorer";


export const ExplorerSection: FC = () => {
    const { config } = useProject();
    const explorers: ContentExplorer[] = config.explorers.map(e => mockExplorers[e]);

    return (
        <div className="ExplorerSection">
            {explorers.map(Explorer => (
                <ExplorerProvider contentExplorer={Explorer} key={Explorer.name}>
                    <Explorer />
                </ExplorerProvider>
            ))}
        </div>
    );
}
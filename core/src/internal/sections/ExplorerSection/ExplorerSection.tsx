import React, { FC } from "react";
import './styles.scss';
import { FileExplorer } from "internal/explorers/FileExplorer/FileExplorer";


export const ExplorerSection: FC = () => {
    return (
        <div className="ExplorerSection">
            <FileExplorer />
        </div>
    );
}
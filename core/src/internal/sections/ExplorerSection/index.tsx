import React, { FC } from "react";
import './styles.scss';
import { FileExplorer } from "../../explorers/FilesView";


export const ExplorerSection: FC = () => {
    return (
        <div className="ExplorerSection">
            <>explorer</>
            <FileExplorer />
        </div>
    );
}
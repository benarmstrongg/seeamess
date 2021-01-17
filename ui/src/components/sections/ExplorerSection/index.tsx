import React, { FC } from "react";
import './styles.scss';
import { FilesView } from "../../views/explorer/FilesView";

interface ExplorerSectionProps {
    filePaths: string[];
}

export const ExplorerSection: FC<ExplorerSectionProps> = ({ children, filePaths }) => {
    return (
        <div className="ExplorerSection">
            <FilesView filePaths={filePaths} />
        </div>
    );
}
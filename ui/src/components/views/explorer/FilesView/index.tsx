import React, { FC } from "react";
import { useSeeamess } from "../../../../context/SeeamessContext";
import { createFileTree, treeItemToComponent } from "./util";
import path from 'path';
import './styles.scss';

export const FilesView: FC = () => {
    const seeamess = useSeeamess();
    const { projectDir } = seeamess.config;
    const filePaths = Object.keys(seeamess.content.files);
    const relativePaths = filePaths.map(p => p.replace(projectDir, ''));
    const tree = createFileTree(relativePaths);

    const handleObjectClick = (filePath: string) => {
        const fullPath = path.join(projectDir, filePath);
        seeamess.openTab('files', fullPath);
    }

    return (
        <div className="FilesView">
            <div className="files">
                {Object.entries(tree).map(([key, item]) => treeItemToComponent([key, item], 0, handleObjectClick))}
            </div>
        </div>
    );
}
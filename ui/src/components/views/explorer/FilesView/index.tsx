import React, { FC } from "react";
import { useSeeamess } from "../../../../context/SeeamessContext";
import path from 'path';
import { createFileTree, treeItemToComponent } from "./util";
import './styles.scss';

export const FilesView: FC<{ filePaths: string[] }> = ({ filePaths }) => {
    const { state, dispatch } = useSeeamess();
    const { projectDir } = state.config;
    const relativePaths = filePaths.map(p => p.replace(projectDir, ''));
    const tree = createFileTree(relativePaths);

    const handleFileClick = (filePath: string) => {
        const fullPath = path.join(projectDir, filePath);
        dispatch({ event: 'openFile', data: fullPath });
    }

    return (
        <div className="FilesView">
            <div className="files">
                file explorer
                {Object.entries(tree).map(([key, item]) => treeItemToComponent([key, item], 0, handleFileClick))}
            </div>
        </div>
    );
}
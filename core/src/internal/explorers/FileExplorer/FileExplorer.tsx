import React, { FC } from "react";
import { createFileTree } from "./util";
import './styles.scss';
import { useConfig, useFiles, useTabs } from "../../../hooks";
import { ExplorerItem, ExplorerGroup } from "../../../components";
import { FaFile, FaFolder } from "react-icons/fa";

export const FileExplorer: FC = () => {
    const { projectDir } = useConfig();
    const { files } = useFiles();
    const filePaths = files.map(c => c.containingFilePath);
    const tabs = useTabs();
    const relativePaths = filePaths.map(p => p.replace(projectDir, ''));
    const tree = createFileTree(relativePaths);

    const treeItemToComponent = (t: [fileName: string, value: any]) => {
        const [fileName, value] = t;
        const fullPath = projectDir + value;
        if (typeof value === 'string') {
            const fileObj = files.find(f => f.containingFilePath === fullPath);
            if (!!fileObj) {
                return (<ExplorerItem key={fullPath} obj={fileObj} onClick={tabs.open} displayName={fileName} icon={FaFile} />)
            }
        }
        else {
            const displayName = '/'.concat(fileName);
            return (
                <ExplorerGroup key={displayName} displayName={displayName} icon={FaFolder}>
                    {Object.entries(value).map(treeItemToComponent)}
                </ExplorerGroup>
            );
        }
    }

    return (
        <div className="FilesView">
            <div className="files">
                {Object.entries(tree).map(treeItemToComponent)}
            </div>
        </div>
    );
}
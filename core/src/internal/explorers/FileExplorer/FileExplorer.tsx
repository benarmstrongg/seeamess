import React from "react";
import { createFileTree, FileEntry } from "./util";
import { useExplorer } from "hooks";
import { ExplorerItem, ExplorerGroup } from "components";
import { FaFile, FaFolder } from "react-icons/fa";
import { SourceFile } from "ast";
import { ContentExplorer } from "types";

export const FileExplorer: ContentExplorer = () => {
    const files = useExplorer(SourceFile);
    const tree = createFileTree(files);

    const treeItemToComponent = (t: [fileName: string, file: SourceFile | FileEntry]) => {
        const [fileName, file] = t;
        if (file instanceof SourceFile) {
            return (<ExplorerItem key={file.filePath} obj={file} displayName={fileName} icon={FaFile} />)
        }
        else {
            const displayName = `/${fileName}`;
            return (
                <ExplorerGroup key={displayName} displayName={displayName} icon={FaFolder}>
                    {Object.entries(file).map(treeItemToComponent)}
                </ExplorerGroup>
            );
        }
    }

    return (<>{Object.entries(tree).map(treeItemToComponent)}</>);
}

FileExplorer.button = (<FaFolder />);

FileExplorer.contentTypes = [SourceFile];
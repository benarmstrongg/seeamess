import React from "react";
import { FileItem } from "./FileItem";
import { FolderItem } from "./FolderItem";

const calcIndentMargin = (indentLevel: number) => {
    return indentLevel * 20;
}

const treeItemToComponent = (p: [key: string, item: any], indentLevel = 0, handleFileClick: (filePath: string) => void) => {
    const [key, item] = p;
    if (typeof item === 'string')
        return (<FileItem fileName={key} key={key} onClick={handleFileClick} indentLevel={indentLevel} path={item} />);
    else return (<FolderItem folderName={key} folderContents={item} indentLevel={indentLevel} key={key} onFileClick={handleFileClick} />);
}


const createFileTree: (paths: string[]) => any = (paths) => {
    let fileTree: any = {};

    function mergePathsIntoFileTree(prevDir: any, currDir: string, i: number, filePath: string[]) {
        const path = filePath.join('/');

        if (i === filePath.length - 1) {
            prevDir[currDir] = path;
        }

        if (!prevDir.hasOwnProperty(currDir)) {
            prevDir[currDir] = {};
        }


        return prevDir[currDir];
    }

    function parseFilePath(filePath: string) {
        var fileLocation = filePath.split('/');

        if (fileLocation.length === 1) {
            return (fileTree[fileLocation[0]] = 'file');
        }

        fileLocation.reduce(mergePathsIntoFileTree, fileTree);
    }

    paths.forEach(parseFilePath);

    return fileTree;
}

export { calcIndentMargin, treeItemToComponent, createFileTree };
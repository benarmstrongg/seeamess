import { SourceFile } from "@seeamess/core";

export type FileEntry = { [name: string]: SourceFile | FileEntry };

export const createFileTree = (files: SourceFile[]): { [name: string]: SourceFile | FileEntry } => {
    let fileTree: any = {};

    function mergePathsIntoFileTree(currentDir: any, currDir: string, i: number, filePath: string[]) {
        const path = filePath.join('/');

        if (i === filePath.length - 1) {
            const file = files.find(f => f.baseName === path);
            currentDir[currDir] = file;
        }

        if (!currentDir.hasOwnProperty(currDir)) {
            currentDir[currDir] = {};
        }

        return currentDir[currDir];
    }

    function parseFilePath(file: SourceFile) {
        var pathParts = file.baseName.split('/');

        if (pathParts.length === 1) {
            return (fileTree[pathParts[0]] = file);
        }

        pathParts.reduce(mergePathsIntoFileTree, fileTree);
    }

    files.forEach(parseFilePath);

    return { '': fileTree };
}
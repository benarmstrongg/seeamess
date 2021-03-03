export const createFileTree: (paths: string[]) => any = (paths) => {
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
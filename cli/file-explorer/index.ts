import fs from 'fs';
import path from 'path';
import Glob from 'glob';
import { SeeamessConfig } from 'types';
import { promisify } from 'util';

const glob = promisify(Glob);

const readFile = (filePath: string) => {
    return fs.readFileSync(filePath, { encoding: 'utf-8' });
}

export const readConfig = () => {
    return JSON.parse(readFile('seeamess.config.js')) as SeeamessConfig;
}

export const readProjectFiles = async (projectDir: string) => {
    const options = getGlobOptions(projectDir);
    const jsFiles = await findJsAssets(projectDir, options);
    return jsFiles.reduce((files, filePath) => ({
        ...files,
        [filePath]: {
            path: filePath,
            name: path.basename(filePath),
            text: readFile(filePath)
        }
    }), {});
}

const findJsAssets = async (rootDir: string, options: Glob.IOptions) => {
    return (await glob('**/*.{js,ts,jsx,tsx}', options)).map(filePath => path.join(rootDir, filePath));
}

const getGlobOptions = (rootDir: string) => {
    return { cwd: rootDir } as Glob.IOptions;
    // return { cwd: rootDir, ignore: '**/node_modules/**' } as Glob.IOptions;
}

export const saveFile = (filePath: string, fileText: string) => {
    fs.writeFileSync(filePath, fileText);
}

export const getUiPath = (rootDir: string) => {
    // return path.join(__dirname, 'index.html');
    return path.join(__dirname, '..', '..', 'ui', 'build');
}
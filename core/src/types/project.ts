import { Monaco } from "types";
import ts from "typescript";

export interface IFile {
    name: string;
    text: string;
    path: string;
}

export interface IConfig {
    projectDir: string;
    port: number;
    compilerOptions: ts.CompilerOptions;
    editors: string[];
    explorers: string[];
}

export interface IProject {
    config: IConfig;
    files: Map<string, IFile>;
    program: ts.Program;
    monaco: Monaco;
}
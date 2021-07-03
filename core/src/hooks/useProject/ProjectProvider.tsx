import React, { FC, useState } from "react";
import ts from "typescript";
import { IFile, IProject } from "./types";
import { ProjectContext } from "./ProjectContext";
import { useTunnel } from "hooks";
import { AST } from "ast";


export const ProjectProvider: FC = ({ children }) => {
    const tunnel = useTunnel();
    const [project, setProject] = useState<IProject>();

    tunnel.once('project.init', (config: IProject['config'], _files: { [key: string]: IFile }) => {
        const files = new Map(Object.entries(_files).filter(([name]) => !name.includes('node_modules')));
        let sourceFiles = Array.from(files.values()).map(f => ts.createSourceFile(f.path, f.text, ts.ScriptTarget.Latest, true));
        const rootNames = sourceFiles.map(f => f.fileName);
        const { compilerOptions } = config;
        const program = ts.createProgram(rootNames, compilerOptions, createCompilerHost(sourceFiles, config));
        AST.program = program;
        setProject({ config, files, program });
    });

    if (!project) {
        return (<div>Loading project configuration...</div>);
    }

    return (
        <ProjectContext.Provider value={project}>
            {children}
        </ProjectContext.Provider>
    );
}

const createCompilerHost = (sourceFiles: ts.SourceFile[], config: IProject['config']): ts.CompilerHost => {
    return {
        getSourceFile: (name, _) => sourceFiles.find(f => f.fileName === name),
        writeFile: (_, __) => { },
        getDefaultLibFileName: () => "",
        useCaseSensitiveFileNames: () => false,
        getCanonicalFileName: fileName => fileName,
        getCurrentDirectory: () => config.projectDir,
        getNewLine: () => "\n",
        getDirectories: () => [],
        fileExists: (fileName) => sourceFiles.some(f => f.fileName === fileName),
        readFile: (fileName) => sourceFiles.find(f => f.fileName === fileName)?.text,
    };
}
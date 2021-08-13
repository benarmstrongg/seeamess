import { AST } from "../../ast";
import { Monaco, TSCompilerOptions, IProject } from "../../types";
import ts from "typescript";
import { loader as _monaco } from '@monaco-editor/react';

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

export const createProgram = (config: IProject['config'], files: IProject['files']): ts.Program => {
    let sourceFiles = Array.from(files.values()).map(f => ts.createSourceFile(f.path, f.text, ts.ScriptTarget.Latest, true));
    const rootNames = sourceFiles.map(f => f.fileName);
    const { compilerOptions } = config;
    const program = ts.createProgram(rootNames, compilerOptions, createCompilerHost(sourceFiles, config));
    AST.program = program;
    return program;
}


export const createMonaco = async (): Promise<Monaco> => {
    return await _monaco.init().then(async monaco => {
        monaco.languages.typescript.typescriptDefaults.setCompilerOptions(tsCompilerOptions);
        return monaco;
    })
}

// TODO: replace with compilerOptions from config????
export const tsCompilerOptions: TSCompilerOptions = {
    target: ts.ScriptTarget.ES2016 as TSCompilerOptions['target'],
    allowNonTsExtensions: true,
    moduleResolution: ts.ModuleResolutionKind.NodeJs,
    module: ts.ModuleKind.ES2015 as any,
    noEmit: true,
    typeRoots: ["node_modules/@types"],
    paths: {},
    reactNamespace: 'React',
    jsx: ts.JsxEmit.React,
    jsxFactory: 'React.createElement',
    //@ts-ignore
    jsxFragmentFactory: 'React.Fragment',
    allowSyntheticDefaultImports: true
    // baseUrl: projectDir
}


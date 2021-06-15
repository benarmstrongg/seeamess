import ts from "typescript";
import { AST, SourceFile } from "ast";

export class TSHelper {
    program: ts.Program;
    sourceFile: ts.SourceFile;
    typeChecker: ts.TypeChecker;

    constructor(public filePath: string, public fileText: string) {
        this.sourceFile = ts.createSourceFile(filePath, fileText, ts.ScriptTarget.Latest);
        this.program = ts.createProgram([filePath], {}, TSHelper._createCompilerHost(filePath, this.sourceFile));
        this.typeChecker = this.program.getTypeChecker();
    }

    getAST() {
        return AST.as(this.sourceFile, SourceFile);
    }

    static _createCompilerHost(filePath, sourceFile) {
        const customCompilerHost: ts.CompilerHost = {
            getSourceFile: (name, _) => {
                if (name === filePath)
                    return sourceFile;
                //return ts.createSourceFile(name, this.projectFiles[name], ts.ScriptTarget.Latest);
            },
            writeFile: (filename, data) => { },
            getDefaultLibFileName: () => "lib.d.ts",
            useCaseSensitiveFileNames: () => false,
            getCanonicalFileName: filename => filename,
            getCurrentDirectory: () => '',
            getNewLine: () => "\n",
            getDirectories: () => [],
            fileExists: () => true,
            readFile: () => ""
        };
        return customCompilerHost;
    }
}
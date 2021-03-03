import ts from "typescript";
import { ASTNode, SourceFile } from "ast";

export class TSHelper {
    program: ts.Program;
    sourceFile: ts.SourceFile;
    typeChecker: ts.TypeChecker;

    constructor(public filePath: string, public fileText: string) {
        this.sourceFile = ts.createSourceFile(filePath, fileText, ts.ScriptTarget.Latest);
        this.program = ts.createProgram([filePath], {}, this._createCompilerHost());
        this.typeChecker = this.program.getTypeChecker();
    }

    getAST() {
        return ASTNode.as(this.sourceFile, SourceFile);
    }

    _createCompilerHost() {
        const customCompilerHost: ts.CompilerHost = {
            getSourceFile: (name, _) => {
                if (name === this.filePath)
                    return this.sourceFile;
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
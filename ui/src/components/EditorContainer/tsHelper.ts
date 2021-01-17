import ts from "typescript";

export class TSHelper {
    program: ts.Program;
    sourceFile: ts.SourceFile;
    typeChecker: ts.TypeChecker;

    constructor(
        public projectDir: string,
        public projectFiles: { [filePath: string]: string },
        public filePath: string,
    ) {
        this.sourceFile = ts.createSourceFile(filePath, projectFiles[filePath], ts.ScriptTarget.Latest);
        this.program = ts.createProgram(Object.keys(this.projectFiles), {}, this._getCompilerHost());
        this.typeChecker = this.program.getTypeChecker();
    }

    getStatements(): ts.NodeArray<ts.Statement> {
        return this.sourceFile.statements;
    }

    _getCompilerHost() {
        const customCompilerHost: ts.CompilerHost = {
            getSourceFile: (name, _) => {
                if (name === this.filePath)
                    return this.sourceFile;
                return ts.createSourceFile(name, this.projectFiles[name], ts.ScriptTarget.Latest);
            },
            writeFile: (filename, data) => { },
            getDefaultLibFileName: () => "lib.d.ts",
            useCaseSensitiveFileNames: () => false,
            getCanonicalFileName: filename => filename,
            getCurrentDirectory: () => this.projectDir,
            getNewLine: () => "\n",
            getDirectories: () => [],
            fileExists: () => true,
            readFile: () => ""
        };
        return customCompilerHost;
    }
}
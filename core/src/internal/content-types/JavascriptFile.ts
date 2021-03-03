import ts from "typescript";
import { SourceFile } from "ast";
import { ContentType } from "types/ContentType";
import { TSHelper } from "internal/code/ts-helper";

export class JavascriptFile extends ContentType {
    is(node: SourceFile) {
        return ts.isSourceFile(node);
    }

    static create(fileName: string, sourceText: string): JavascriptFile {
        const sourceFile = ts.createSourceFile(fileName, sourceText, ts.ScriptTarget.ESNext);
        const program = ts.createProgram([fileName], {}, TSHelper._createCompilerHost(fileName, sourceFile));
        program.getTypeChecker();
        return new JavascriptFile(program.getSourceFile(fileName) || sourceFile);
    }
}
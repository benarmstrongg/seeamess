import ts from "typescript";
import { SourceFile } from "ast";
import { ContentType } from "types/ContentType";

export class JavascriptFile extends ContentType {
    is(node: SourceFile) {
        return node instanceof SourceFile && !!node.fileName;
    }

    static create(fileName: string, sourceText: string): JavascriptFile {
        const sourceFile = ts.createSourceFile(fileName, sourceText, ts.ScriptTarget.ESNext);
        return new JavascriptFile(sourceFile);
    }
}
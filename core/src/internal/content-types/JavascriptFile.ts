import { SourceFile } from "../../ast";
import { ContentType } from "../../types/ContentType";

export class JavascriptFile extends ContentType {
    is(node: SourceFile) {
        return node instanceof SourceFile && !!node.fileName;
    }
}
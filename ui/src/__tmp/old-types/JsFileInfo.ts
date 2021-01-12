import { ClassDeclaration } from "./ClassDeclaration";
import { ExportDeclaration } from "./ExportDeclaration";
import { FunctionDeclaration } from "./FunctionDecaration";
import { ImportDeclaration } from "./ImportDeclaration";
import { VariableDeclaration } from "./VariableDeclaration";

export interface JsFileInfo {
    imports: ImportDeclaration[];
    exports: ExportDeclaration[];
    classes: ClassDeclaration[];
    functions: FunctionDeclaration[];
    variables: VariableDeclaration[];
}
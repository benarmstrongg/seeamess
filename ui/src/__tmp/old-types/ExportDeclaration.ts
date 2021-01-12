import ts from 'typescript';
import { Declaration } from "./Declaration";

export interface ExportDeclaration extends Declaration {
    _dtype: 'export';
    namedExports: string[];
    defaultExport?: string;
    library?: string;
    node: ts.ExportDeclaration | ts.ExportAssignment;
};

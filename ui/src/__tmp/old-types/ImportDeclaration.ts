import ts from 'typescript';
import { Declaration } from './Declaration';

export interface ImportDeclaration extends Declaration {
    _dtype: 'import';
    namedImports: string[];
    defaultImport: string;
    library: string;
    node: ts.ImportDeclaration;
};
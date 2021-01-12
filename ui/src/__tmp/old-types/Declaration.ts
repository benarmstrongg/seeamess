import ts from 'typescript';

export interface Declaration {
    _dtype: 'import' | 'export' | 'variable' | 'parameter' | 'function' | 'class';
    node: ts.Node;
}
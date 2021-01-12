import ts from 'typescript';
import { Declaration } from './Declaration';

export interface VariableDeclaration extends Declaration {
    _dtype: 'variable';
    name: string;
    type: string;
    node: ts.VariableDeclaration;
};
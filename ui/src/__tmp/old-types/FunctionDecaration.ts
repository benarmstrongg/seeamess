import ts from 'typescript';
import { Declaration } from './Declaration';
import { ParameterDeclaration } from './ParameterDeclaration';

export interface FunctionDeclaration extends Declaration {
    _dtype: 'function';
    parameters: ParameterDeclaration[];
    returnType: string;
    name: string;
    node: ts.FunctionDeclaration | ts.VariableDeclaration;
};

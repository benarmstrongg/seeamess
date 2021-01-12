import ts from 'typescript';
import { Declaration } from './Declaration';

export interface ParameterDeclaration extends Declaration {
    _dtype: 'parameter';
    name: string;
    type: string;
    required: boolean;
    node: ts.Node;
    boundProperties?: ParameterDeclaration[];
};

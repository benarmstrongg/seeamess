import ts from 'typescript';
import { FunctionDeclaration } from './FunctionDecaration';
import { VariableDeclaration } from './VariableDeclaration';

export interface ClassDeclaration {
    _dtype: 'class';
    name: string;
    constructor: FunctionDeclaration;
    methods: FunctionDeclaration[];
    properties: VariableDeclaration[];
    node: ts.ClassDeclaration;
};

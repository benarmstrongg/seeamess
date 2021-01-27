import ts from "typescript";
import { ASTNode } from "../ASTNode";
import { VariableDeclaration } from "./VariableDeclaration";

export class VariableDeclarationList extends ASTNode implements ts.VariableDeclarationList {
    declarations: ts.VariableDeclarationList['declarations'];
    parent: ts.VariableDeclarationList['parent'];
    kind: ts.VariableDeclarationList['kind'];

    constructor(node: ts.VariableDeclarationList) {
        super(node);
        this.declarations = node.declarations;
        this.parent = node.parent;
        this.kind = node.kind;
    }

    getDeclarations(): VariableDeclaration[] {
        return this.declarations.map(d => ASTNode.fromNode(d, VariableDeclaration));
    }

    getDeclarationNames(): string[] {
        return this.getDeclarations().map(d => d.getNames()).flat();
    }

    getDeclarationNamesString(): string {
        return this.getDeclarations().map(d => d.getNamesString()).join(', ');
    }

    getKind(): string {
        const nodeFlag = ts.NodeFlags[this.flags];
        return (nodeFlag && nodeFlag.toLowerCase()) || 'var';
    }
}
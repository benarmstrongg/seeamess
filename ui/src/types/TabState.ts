import { ASTNode } from '../components/EditorContainer/ts-ast-wrapper/ASTNode';

export interface TabState {
    filePath: string;
    initialValue: string;
    ast: ASTNode;
}

export type TabAction = (tab: TabState) => void;
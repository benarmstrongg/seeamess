import { ASTCollection } from './jscodeshift';

export interface TabState {
    filePath: string;
    initialValue: string;
    ast: ASTCollection;
}

export type TabAction = (tab: TabState) => void;
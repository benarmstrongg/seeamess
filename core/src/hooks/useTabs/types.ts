import { AST } from "ast";

export interface ITabsContext {
    openTabs: AST[];
    activeTab: AST;
    activeIndex: number;
    open(obj: AST): void;
    close(tabIndex: number): void;
    change(toIndex: number): void;
}
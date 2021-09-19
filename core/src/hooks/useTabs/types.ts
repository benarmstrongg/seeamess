import { AST } from "../../ast";
import { ReactElement } from "react";

export interface ITab {
    obj: AST;
    name: string;
    icon?: ReactElement;
}

export interface ITabsContext {
    openTabs: ITab[];
    activeTab: ITab;
    activeIndex: number;
    open(tab: ITab): void;
    close(tabIndex: number): void;
    change(toIndex: number): void;
}
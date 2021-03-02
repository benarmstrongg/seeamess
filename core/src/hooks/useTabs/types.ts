import { ContentType } from "../../types/ContentType";

export interface ITabsContext {
    openTabs: ContentType[];
    activeTab: number;
    open(obj: ContentType): void;
    close(tabIndex: number): void;
    change(toIndex: number): void;
}
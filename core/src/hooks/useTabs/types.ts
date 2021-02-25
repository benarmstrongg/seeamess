import { ContentObjectMeta } from "../../types/ContentObjectMeta";

export interface ITabsContext {
    openTabs: ContentObjectMeta[];
    activeTab: number;
    open(obj: ContentObjectMeta): void;
    close(tabIndex: number): void;
    change(toIndex: number): void;
}
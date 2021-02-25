import { createContext } from "react";
import { ITabsContext } from "./types";

const defaultValue: ITabsContext = {
    openTabs: [],
    activeTab: -1,
    open: () => void 0,
    close: () => void 0,
    change: () => void 0
};

export const TabsContext = createContext<ITabsContext>(defaultValue);
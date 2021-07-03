import React, { FC, useCallback, useEffect, useState } from "react";
import { TabsContext } from "./TabsContext";
import { ITabsContext as T } from './types';

export const TabsProvider: FC = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState<T['activeIndex']>(0);
    const [openTabs, setOpenTabs] = useState<T['openTabs']>([]);

    const open = useCallback<T['open']>(obj => {
        const existingTabIndex = openTabs.findIndex(tab =>
            tab.constructor.name === obj.constructor.name &&
            tab.pos === obj.pos &&
            tab.containingFilePath === obj.containingFilePath
        );
        if (existingTabIndex !== -1) {
            setActiveIndex(existingTabIndex);
        }
        else {
            setOpenTabs([...openTabs, obj]);
            setActiveIndex(openTabs.length);
        }
    }, [openTabs]);

    const close = useCallback<T['close']>(index => {
        openTabs.splice(index, 1);
        setOpenTabs(openTabs);
    }, [openTabs]);

    const change = useCallback<T['change']>(index => {
        setActiveIndex(index);
    }, []);

    useEffect(() => {
        const activeTab = openTabs[activeIndex];
        if (activeTab) {
            document.title = activeTab.containingFileName;
        }
    }, [activeIndex, openTabs])

    return (
        <TabsContext.Provider
            value={{
                activeIndex,
                activeTab: openTabs[activeIndex],
                openTabs,
                open,
                close,
                change
            }}
        >
            {children}
        </TabsContext.Provider>
    );
}
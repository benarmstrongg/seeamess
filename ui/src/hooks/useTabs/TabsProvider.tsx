import React, { FC, useCallback, useEffect, useState } from "react";
import { TabsContext } from "./TabsContext";
import { ITabsContext as T } from './types';

export const TabsProvider: FC = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState<T['activeIndex']>(0);
    const [openTabs, setOpenTabs] = useState<T['openTabs']>([]);

    const open = useCallback<T['open']>(tab => {
        const existingTabIndex = openTabs.findIndex(_tab =>
            _tab.name === tab.name &&
            _tab.constructor.name === tab.constructor.name &&
            _tab.obj.pos === tab.obj.pos &&
            _tab.obj.containingFilePath === tab.obj.containingFilePath
        );
        if (existingTabIndex !== -1) {
            setActiveIndex(existingTabIndex);
        }
        else {
            setOpenTabs([...openTabs, tab]);
            setActiveIndex(openTabs.length);
        }
    }, [openTabs]);

    const close = useCallback<T['close']>(index => {
        setOpenTabs(openTabs.filter((_, i) => i !== index));
    }, [openTabs]);

    const change = useCallback<T['change']>(index => {
        setActiveIndex(index);
    }, []);

    useEffect(() => {
        const activeTab = openTabs[activeIndex];
        if (activeTab) {
            document.title = activeTab.name;
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
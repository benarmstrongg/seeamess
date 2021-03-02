import React, { FC, useCallback, useState } from "react";
import { TabsContext } from "./TabsContext";
import { ITabsContext as T } from './types';

export const TabsProvider: FC = ({ children }) => {
    const [activeTab, setActiveTab] = useState<T['activeTab']>(0);
    const [openTabs, setOpenTabs] = useState<T['openTabs']>([]);

    const open = useCallback<T['open']>(obj => {
        console.log(obj.constructor.name)
        console.log(obj.pos);
        const existingTabIndex = openTabs.findIndex(tab =>
            tab.constructor.name === obj.constructor.name &&
            tab.pos === obj.pos &&
            tab.containingFilePath === obj.containingFilePath
        );
        if (existingTabIndex !== -1) {
            setActiveTab(existingTabIndex);
        }
        else {
            setOpenTabs([...openTabs, obj]);
            setActiveTab(openTabs.length);
        }
    }, [openTabs]);

    const close = useCallback<T['close']>(index => {
        openTabs.splice(index, 1);
        setOpenTabs(openTabs);
    }, [openTabs]);

    const change = useCallback<T['change']>(index => {
        setActiveTab(index);
    }, []);

    return (
        <TabsContext.Provider
            value={{
                activeTab,
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
import React, { FC, useCallback, useState } from "react";
import { TabsContext } from "./TabsContext";
import { ITabsContext as T } from './types';

export const TabsProvider: FC = ({ children }) => {
    const [activeTab, setActiveTab] = useState<T['activeTab']>(0);
    const [openTabs, setOpenTabs] = useState<T['openTabs']>([]);

    const open = useCallback<T['open']>(obj => {
        console.log(obj);
        const existingTabIndex = openTabs.findIndex(tab =>
            tab.contentType === obj.contentType && tab.objectName === obj.objectName
        );
        if (existingTabIndex !== -1) {
            setActiveTab(existingTabIndex);
        }
        else {
            setOpenTabs([...openTabs, obj]);
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
import React, { FC, useReducer } from "react";
import { SeeamessContext } from "./SeeamessContext";
import { AppDispatch, AppState } from "../types";


export const SeeamessContextProvider: FC = ({ children }) => {
    const appStateDefaults: AppState = {
        tabs: [],
        activeTab: 0,
        files: null as any,
        config: null as any,
        socket: null as any
    };

    const [state, dispatch] = useReducer<(state: AppState, action: AppDispatch) => AppState>(
        (state, action) => {
            switch (action.event) {
                case 'openFile': {
                    const filePath = action.data;
                    const { tabs, files } = state;
                    const existingTab = tabs.find(tab => tab.filePath === filePath);
                    if (!!existingTab)
                        return { ...state, activeTab: tabs.indexOf(existingTab) };
                    return {
                        ...state,
                        tabs: [...tabs, { filePath, initialValue: files[filePath] }],
                        activeTab: tabs.length
                    };
                }
                case 'closeTab': {
                    const closedTab = action.data;
                    const { tabs } = state;
                    const updatedTabs = tabs.splice(tabs.indexOf(closedTab), 1);
                    return { ...state, tabs: updatedTabs };
                }
                case 'setActiveTab': {
                    const tab = action.data;
                    const { tabs } = state;
                    return { ...state, activeTab: tabs.indexOf(tab) };
                }
                case 'setConfig': {
                    const config = action.data;
                    return { ...state, config };
                }
                case 'setSocket': {
                    const socket = action.data;
                    return { ...state, socket };
                }
                case 'setFiles': {
                    const files = action.data;
                    return { ...state, files };
                }
                default:
                    console.log(action);
                    return {} as any;
            }
        }, appStateDefaults);

    return <SeeamessContext.Provider value={{ state, dispatch }}>{children}</SeeamessContext.Provider>;
}
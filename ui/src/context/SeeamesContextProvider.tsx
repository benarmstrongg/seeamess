import React, { FC, useCallback, useReducer, useState } from "react";
import { SeeamessContext } from "./SeeamessContext";
import { SeeamessState as S } from "../types";
import { ASTNode } from "../code/ts-ast-wrapper/ASTNode";


// export const SeeamessContextProvider: FC = ({ children }) => {
//     const appStateDefaults: SeeamessState = {
//         tabs: [],
//         activeTab: 0,
//         content: null as any,
//         config: null as any,
//         socket: null as any
//     };

//     const [state, dispatch] = useReducer<(state: SeeamessState, action: AppDispatch) => SeeamessState>(
//         (state, action) => {
//             switch (action.event) {
//                 case 'openFile': {
//                     const filePath = action.data;
//                     const { tabs, content: files } = state;
//                     const existingTab = tabs.find(tab => tab.filePath === filePath);
//                     if (!!existingTab)
//                         return { ...state, activeTab: tabs.indexOf(existingTab) };
//                     return {
//                         ...state,
//                         tabs: [...tabs, { filePath, initialValue: files[filePath] }],
//                         activeTab: tabs.length
//                     };
//                 }
//                 case 'closeTab': {
//                     const closedTab = action.data;
//                     const { tabs } = state;
//                     const updatedTabs = tabs.splice(tabs.indexOf(closedTab), 1);
//                     return { ...state, tabs: updatedTabs };
//                 }
//                 case 'setActiveTab': {
//                     const tab = action.data;
//                     const { tabs } = state;
//                     return { ...state, activeTab: tabs.indexOf(tab) };
//                 }
//                 case 'setConfig': {
//                     const config = action.data;
//                     return { ...state, config };
//                 }
//                 case 'setSocket': {
//                     const socket = action.data;
//                     return { ...state, socket };
//                 }
//                 case 'setFiles': {
//                     const files = action.data;
//                     return { ...state, content: files };
//                 }
//                 default:
//                     return {} as any;
//             }
//         }, appStateDefaults);

//     return <SeeamessContext.Provider value={{ state, dispatch }}>{children}</SeeamessContext.Provider>;
// }

const seeamessStateDefaults: S = {
    content: null as any,
    config: null as any,
    openTabs: [],
    activeTab: -1,
    getContent: null as any,
    setContent: null as any,
    saveContent: null as any,
    openTab: null as any,
    closeTab: null as any,
    changeTab: null as any
};

interface SeeamessContextProviderProps {
    content: S['content'];
    config: S['config'];
}

export const SeeamessContextProvider2: FC<SeeamessContextProviderProps> = ({ children, content, config }) => {
    const [state, setState] = useState<S>({ ...seeamessStateDefaults, content, config });
    console.log(state.openTabs);

    const getContent = useCallback<S['getContent']>((contentType, objectName) => {
        return state.content[contentType][objectName];
    }, [state]);

    const setContent = useCallback<S['setContent']>((contentType, objectName, value) => {
        const { content } = state;
        const contentObject = getContent(contentType, objectName);
        if (!contentObject)
            return false;
        if (value instanceof ASTNode) {
            contentObject.ast = value;
            contentObject.value = value.sourceFile.text;
        }
        else {
            contentObject.value = value;
            // TODO
            // contentObject.ast = tsHelper
        }
        setState({
            ...state,
            content: {
                ...content,
                [contentType]: {
                    ...contentType[contentType],
                    [objectName]: contentObject
                }
            }
        });
        return true;
    }, [getContent, state]);

    const saveContent = useCallback(async (contentType: string, objectName: string) => {
        // TODO
        return true;
    }, []);

    const openTab = useCallback((contentType: string, objectName: string) => {
        const { openTabs } = state;
        const existingTab = openTabs.find(tab => tab.contentType === contentType && tab.objectName === objectName);
        if (existingTab !== undefined) {
            setState({ ...state, activeTab: openTabs.indexOf(existingTab) });
            return;
        }
        else {
            const obj = getContent(contentType, objectName);
            if (!obj)
                return;

            // TODO remove that string once you can determine its suitable replacement
            setState({
                ...state,
                openTabs: [...openTabs, {
                    contentType,
                    objectName,
                    initialValue: obj.initialValue || 'getContent was undefined in openContent',
                    containingFilePath: obj.containingFilePath || ''
                }],
                activeTab: openTabs.length
            });
        }
    }, [state, getContent]);

    const closeTab = useCallback<S['closeTab']>((index) => {
        const { openTabs } = state;
        openTabs.splice(index, 1);
        setState({ ...state, openTabs });
    }, [state]);

    const changeTab = useCallback<S['changeTab']>((index) => {
        setState({ ...state, activeTab: index });
    }, [state])

    return (
        <SeeamessContext.Provider value={{
            ...state,
            getContent, setContent, saveContent,
            openTab, closeTab, changeTab
        }}>
            {children}
        </SeeamessContext.Provider>
    );
}
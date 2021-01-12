import React, { FC, MouseEvent } from "react";
import { FaTimes } from "react-icons/fa";
import { TabState, SeeamessConfig, TabAction } from "../../types";
import './styles.scss';

interface TabBarProps {
    tabs: TabState[],
    activeTab: number,
    config: SeeamessConfig;
    closeTab: TabAction;
    changeTab: TabAction;
};

export const TabBar: FC<TabBarProps> = ({ tabs, activeTab, config, closeTab, changeTab }) => {
    const handleTabClick = (e: MouseEvent, tab: TabState) => {
        const clickedElement = e.target as HTMLElement;
        if (clickedElement.classList.contains('close'))
            return closeTab(tab);
        changeTab(tab);
    }

    return (
        <div className="TabBar">
            {tabs.map((tab, index) => {
                const path = getRelativeFilePath(config.projectDir, tab.filePath);
                return (
                    <div
                        key={path}
                        className={activeTab === index ? 'Tab active' : 'Tab'}
                        onClick={(e) => handleTabClick(e, tab)}
                    >
                        <span>{path}</span>
                        <>&nbsp;</>
                        <FaTimes className="close" />
                    </div>
                );
            })}
        </div>
    );
}

const getRelativeFilePath = (projectDir: string, filePath: string) => {
    return filePath.replace(projectDir, '');
}
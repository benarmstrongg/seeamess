import React, { FC, MouseEvent } from "react";
import { FaTimes } from "react-icons/fa";
import { ContentObject } from "../../../types/ContentObject";
import './styles.scss';

interface TabBarProps {
    tabs: ContentObject[];
    activeTab: number;
    projectDir: string;
    closeTab: (tabIndex: number) => void;
    changeTab: (tabIndex: number) => void;
};

export const TabBar: FC<TabBarProps> = ({ tabs, activeTab, projectDir, closeTab, changeTab }) => {

    const handleTabClick = (e: MouseEvent, tabIndex: number) => {
        const clickedElement = e.target as HTMLElement;
        if (clickedElement.classList.contains('close')) {
            return closeTab(tabIndex);
        }
        changeTab(tabIndex);
    }

    return (
        <div className="TabBar">
            {tabs.map((tab, index) => {
                const path = getRelativeFilePath(projectDir, tab.objectName);
                return (
                    <div
                        key={path}
                        className={activeTab === index ? 'Tab active' : 'Tab'}
                        onClick={(e) => handleTabClick(e, index)}
                    >
                        <span>{path}</span>
                        <>&nbsp;</>
                        <div>
                            <FaTimes className="close" />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

const getRelativeFilePath = (projectDir: string, filePath: string) => {
    return filePath.replace(projectDir, '');
}
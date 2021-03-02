import React, { FC, MouseEvent } from "react";
import { FaTimes } from "react-icons/fa";
import { useConfig, useTabs } from "../../../hooks";
import './styles.scss';

export const TabBar: FC = () => {
    const { projectDir } = useConfig();
    const { openTabs, activeTab, close, change } = useTabs();

    const handleTabClick = (e: MouseEvent, tabIndex: number) => {
        const clickedElement = e.target as HTMLElement;
        if (clickedElement.classList.contains('close')) {
            return close(tabIndex);
        }
        change(tabIndex);
    }

    return (
        <div className="TabBar">
            {openTabs.map((tab, index) => {
                const path = tab.containingFilePath.replace(projectDir, '');
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
import React, { FC, MouseEvent } from "react";
import { FaTimes } from "react-icons/fa";
import { useTabs } from "hooks";
import './styles.scss';

export const TabBar: FC = () => {
    const { openTabs, activeIndex, close, change } = useTabs();

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
                const name = tab.containingFileName;
                return (
                    <div
                        key={name}
                        className={activeIndex === index ? 'Tab active' : 'Tab'}
                        onClick={(e) => handleTabClick(e, index)}
                    >
                        <span>{name}</span>
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
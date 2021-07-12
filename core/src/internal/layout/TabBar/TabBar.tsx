import React, { FC, MouseEvent } from "react";
import { FaTimes } from "react-icons/fa";
import { useTabs } from "hooks";
import Container from './styles';
import classNames from "classnames";

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
        <Container>
            {openTabs.map((tab, index) => {
                const name = tab.containingFileName;
                return (
                    <div
                        key={name}
                        className={classNames({
                            'Tab': true,
                            'active': activeIndex === index
                        })}
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
        </Container>
    );
}
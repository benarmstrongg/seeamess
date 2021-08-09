import React, { FC, MouseEvent } from "react";
import { FaTimes } from "react-icons/fa";
import { useTabs } from "hooks";
import Containers from './styles';
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
        <Containers.Main>
            {openTabs.map((tab, index) => {
                return (
                    <Containers.Tab
                        key={tab.obj.key}
                        className={classNames({
                            'active': activeIndex === index
                        })}
                        onClick={(e) => handleTabClick(e, index)}
                    >
                        <Containers.Info>
                            {!!tab.icon && tab.icon}
                            <span>{tab.name}</span>
                        </Containers.Info>
                        <Containers.Close>
                            <FaTimes className="close" />
                        </Containers.Close>
                    </Containers.Tab>
                );
            })}
        </Containers.Main>
    );
}
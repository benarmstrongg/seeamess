import React, { FC } from "react";
import { useTabs } from "hooks";
import './styles.scss';

interface TabContainerProps {
    tabIndex: number;
}

export const TabContainer: FC<TabContainerProps> = ({ children, tabIndex }) => {
    const { activeIndex } = useTabs();
    return (
        <div className="TabContainer" hidden={activeIndex !== tabIndex}>
            {children}
        </div>
    );
}
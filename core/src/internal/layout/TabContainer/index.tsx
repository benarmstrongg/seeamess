import React, { FC } from "react";
import { useTabs } from "../../../hooks";
import './styles.scss';

interface TabContainerProps {
    tabIndex: number;
}

export const TabContainer: FC<TabContainerProps> = ({ children, tabIndex }) => {
    const { activeTab } = useTabs();
    return (
        <div className="TabContainer" hidden={activeTab !== tabIndex}>
            {children}
        </div>
    );
}
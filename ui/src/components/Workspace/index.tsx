import React, { FC } from "react";
import { TabBar } from "../TabBar";
import './styles.scss';
import { TabContainer } from "../TabContainer";
import { useSeeamess } from "../../context/SeeamessContext";
import { TabAction } from "../../types";

export const Workspace: FC = () => {
    const { state, dispatch } = useSeeamess();
    const { tabs, config, activeTab } = state;

    const changeTab: TabAction = (tab) => {
        dispatch({ event: 'setActiveTab', data: tab });
    }

    const closeTab: TabAction = (tab) => {
        dispatch({ event: 'closeTab', data: tab });
    }

    return (
        <div className="Workspace">workspace
            <TabBar tabs={tabs} activeTab={activeTab} config={config} changeTab={changeTab} closeTab={closeTab} />
            {tabs.map((tab, index) =>
                <div hidden={index !== activeTab} key={tab.filePath}>
                    <TabContainer tab={tab} />
                </div>
            )}
        </div>
    );
}
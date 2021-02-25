import React, { FC } from "react";
import { TabBar } from "../../layout/TabBar";
import './styles.scss';
import { TabContainer } from "../../layout/TabContainer";
import { useConfig, useTabs } from "../../../hooks";

export const EditorSection: FC = () => {
    const { openTabs, activeTab, change: changeTab, close: closeTab } = useTabs();
    const config = useConfig();

    return (
        <div className="Workspace">workspace
            <TabBar tabs={openTabs} activeTab={activeTab} projectDir={config.projectDir} changeTab={changeTab} closeTab={closeTab} />
            {openTabs.map((obj, index) =>
                <div className="WorkspaceSection" hidden={index !== activeTab} key={`${obj.contentType}-${obj.objectName}`}>
                    <TabContainer obj={obj} />
                </div>
            )}
        </div>
    );
}
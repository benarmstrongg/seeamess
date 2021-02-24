import React, { FC } from "react";
import { TabBar } from "../../layout/TabBar";
import './styles.scss';
import { TabContainer } from "../../layout/TabContainer";
import { useSeeamess } from "../../../hooks/SeeamessContext";

export const EditorSection: FC = () => {
    const seeamess = useSeeamess();
    const { openTabs, config, activeTab } = seeamess;

    const changeTab = (index: number) => {
        seeamess.changeTab(index);
    }

    const closeTab = (index: number) => {
        seeamess.closeTab(index);
    }

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
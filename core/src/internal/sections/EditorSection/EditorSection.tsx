import React, { FC } from "react";
import { TabBar } from "../../layout/TabBar";
import './styles.scss';
import { TabContainer } from "../../layout/TabContainer";
import { useTabs } from "../../../hooks";
import { EditorContainer } from "../../layout/EditorContainer";

export const EditorSection: FC = () => {
    const { openTabs } = useTabs();

    return (
        <div className="EditorSection">
            <TabBar />
            {openTabs.map((obj, index) =>
                <TabContainer tabIndex={index} key={`${obj.containingFilePath}-${obj.kindString}-${obj.pos}`}>
                    <EditorContainer obj={obj} />
                </TabContainer>
            )}
        </div>
    );
}
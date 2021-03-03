import React, { FC } from "react";
import { TabBar } from "internal/layout/TabBar";
import './styles.scss';
import { TabContainer } from "internal/layout/TabContainer";
import { useTabs } from "hooks";
import { EditorContainer } from "internal/layout/EditorContainer";

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
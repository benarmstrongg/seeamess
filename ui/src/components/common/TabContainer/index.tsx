import React, { FC } from "react";
import { TabState } from "../../../types";
import { EditorContainer } from "../../views/workspace/StandardEditorView/EditorContainer";
import './styles.scss';

interface TabContainerProps {
    tab: TabState;

}

export const TabContainer: FC<TabContainerProps> = ({ tab }) => {
    const { filePath, initialValue } = tab;

    return (
        <div className="TabContainer">
            <EditorContainer filePath={filePath} initialValue={initialValue} />
        </div>
    );
}
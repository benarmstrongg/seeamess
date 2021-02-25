import React, { FC } from "react";
import { ContentObjectMeta } from "../../../types/ContentObjectMeta";
import { EditorContainer } from "../../editors/EditorContainer";
import './styles.scss';

interface TabContainerProps {
    obj: ContentObjectMeta;
}

export const TabContainer: FC<TabContainerProps> = ({ obj }) => {
    return (
        <div className="TabContainer">
            {obj && (
                <EditorContainer obj={obj} />
            )}
        </div>
    );
}
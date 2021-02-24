import React, { FC } from "react";
import { ContentObject } from "../../../types/ContentObject";
import { EditorContainer } from "../../editors/EditorContainer";
import './styles.scss';

interface TabContainerProps {
    obj: ContentObject;
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
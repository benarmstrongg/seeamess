import React, { FC } from "react";
import { ContentObjectMeta } from "../../types/ContentObjectMeta";
import './styles.scss';

interface ExplorerItemProps {
    obj: ContentObjectMeta;
    onClick(obj: ContentObjectMeta): void;
    icon?: FC;
    indentLevel?: number;
    displayName?: string
}

export const ExplorerItem: FC<ExplorerItemProps> = ({ obj, onClick, indentLevel = 0, icon, displayName }) => {
    const Icon = icon;
    displayName = displayName || obj.objectName;
    return (
        <div className="ExplorerItem" onClick={() => onClick(obj)}>
            {!!Icon ? <Icon /> : null}
            <>&nbsp;</>
            <span>{displayName}</span>
        </div>
    );
}
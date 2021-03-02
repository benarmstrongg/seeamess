import React, { FC } from "react";
import { ContentType } from "../../types/ContentType";
import './styles.scss';

interface ExplorerItemProps {
    obj: ContentType;
    onClick(obj: ContentType): void;
    icon?: FC;
    indentLevel?: number;
    displayName?: string
}

export const ExplorerItem: FC<ExplorerItemProps> = ({ obj, onClick, indentLevel = 0, icon, displayName }) => {
    const Icon = icon;
    displayName = displayName || obj.constructor.name;
    return (
        <div className="ExplorerItem" onClick={() => onClick(obj)}>
            {!!Icon ? <Icon /> : null}
            <>&nbsp;</>
            <span>{displayName}</span>
        </div>
    );
}
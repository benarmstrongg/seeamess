import React, { FC, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import './styles.scss';

interface ExplorerSectionProps {
    displayName: string;
    icon?: FC;
    indentLevel?: number;
}

export const ExplorerGroup: FC<ExplorerSectionProps> = ({ children, displayName, icon, indentLevel = 0 }) => {
    const [expanded, setExpanded] = useState(false);
    const Icon = icon;

    return (
        <div className="ExplorerGroup">
            <div className="ExplorerGroupHeader" onClick={() => setExpanded(!expanded)}>
                <>
                    {expanded === true ? <FaCaretDown /> : <FaCaretUp />}
                    {!!Icon ? <Icon /> : null}
                </>
                <>&nbsp;</>
                <span>{displayName}</span>
            </div>
            {expanded === true ? children : null}
        </div>
    );
}
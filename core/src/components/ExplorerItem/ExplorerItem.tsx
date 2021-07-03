import { AST } from "ast";
import React, { FC } from "react";
import './styles.scss';

interface ExplorerItemProps {
    obj: AST;
    onClick(obj: AST): void;
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
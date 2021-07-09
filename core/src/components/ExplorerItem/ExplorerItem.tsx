import { AST } from "ast";
import { useTabs } from "hooks";
import React, { FC } from "react";
import './styles.scss';

interface ExplorerItemProps {
    obj: AST;
    icon?: FC;
    displayName?: string
}

export const ExplorerItem: FC<ExplorerItemProps> = ({ obj, icon, displayName }) => {
    const tabs = useTabs();
    const Icon = icon;
    return (
        <div className="ExplorerItem" onClick={() => tabs.open(obj)}>
            {!!Icon ? <Icon /> : null}
            <>&nbsp;</>
            <span>{displayName || obj.constructor.name}</span>
        </div>
    );
}
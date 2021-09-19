import React from "react";
import { ExplorerGroup, ExplorerItem, useExplorer, ContentExplorer } from "@seeamess/core";
import { ReactFunctionComponent } from "../content-types/FC";
import { FaReact } from "react-icons/fa";

export const ReactComponentExplorer: ContentExplorer = () => {
    const components = useExplorer(ReactFunctionComponent);
    return (
        <ExplorerGroup displayName="Components">
            {components.map(c => (
                <ExplorerItem key={c.key} obj={c} displayName={c.getName()} icon={ReactComponentExplorer.icon} />
            ))}
        </ExplorerGroup>
    );
}

ReactComponentExplorer.icon = <FaReact />;

ReactComponentExplorer.contentTypes = [ReactFunctionComponent];
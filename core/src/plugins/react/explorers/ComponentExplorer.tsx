import React from "react";
import { ExplorerGroup, ExplorerItem } from "components";
import { useExplorer } from "hooks";
import { ReactFunctionComponent } from "../content-types/FC";
import { ContentExplorer } from "types";
import { FaReact } from "react-icons/fa";

export const ReactComponentExplorer: ContentExplorer = () => {
    const components = useExplorer(ReactFunctionComponent);
    return (
        <ExplorerGroup displayName="Components">
            {components.map(c => (
                <ExplorerItem key={c.key} obj={c} displayName={c.getName()} />
            ))}
        </ExplorerGroup>
    );
}

ReactComponentExplorer.button = (<FaReact />);

ReactComponentExplorer.contentTypes = [ReactFunctionComponent];
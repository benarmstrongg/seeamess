import React from "react";
import { ExplorerGroup, ExplorerItem } from "components";
import { useExplorer } from "hooks";
import { ReactFunctionComponent } from "../content-types/FC";
import { ContentExplorer } from "types";
import { FaReact } from "react-icons/fa";

export const ReactComponentExplorer: ContentExplorer = () => {
    const components = useExplorer(ReactFunctionComponent);
    console.log(components);
    return (
        <ExplorerGroup displayName="Components">
            {components.map(c => (
                <ExplorerItem obj={c} />
            ))}
        </ExplorerGroup>
    );
}

ReactComponentExplorer.button = (<FaReact />);

ReactComponentExplorer.contentTypes = [ReactFunctionComponent];
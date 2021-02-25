import React, { FC, useEffect, useState } from "react";
import { getConfig } from "../../internal/code/config/getConfig";
import { SeeamessConfig } from "../../types";
import { ConfigContext } from "./ConfigContext";


export const SeeamessConfigProvider: FC = ({ children }) => {
    const [config, setConfig] = useState<SeeamessConfig>();
    useEffect(() => {
        if (config === undefined) {
            getConfig().then(setConfig);
        }
    }, [config]);

    if (!config)
        return (<div>Loading project configuration...</div>);

    return (
        <ConfigContext.Provider value={config}>
            {children}
        </ConfigContext.Provider>
    );
}
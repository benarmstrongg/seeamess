import React, { FC, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { useConfig } from "hooks/useConfig";
import { TunnelContext } from "./TunnelContext";
import { io as socketIO } from 'socket.io-client';

export const TunnelProvider: FC = ({ children }) => {
    const config = useConfig();
    const [socket, setSocket] = useState<Socket>();

    useEffect(() => {
        if (!config.port)
            return;
        const socket = socketIO(`ws://${window.location.hostname}:${config.port}`);
        setSocket(socket.connect());
    }, [config.port]);

    if (!socket)
        return (<div>Connecting to server...</div>);

    return (
        <TunnelContext.Provider value={socket}>
            {children}
        </TunnelContext.Provider>
    )
}
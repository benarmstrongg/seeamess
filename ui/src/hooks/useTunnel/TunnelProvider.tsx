
import React, { FC, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { TunnelContext } from "./TunnelContext";
import { io as socketIO } from 'socket.io-client';

export const TunnelProvider: FC = ({ children }) => {
    const [socket, setSocket] = useState<Socket>();
    const port = 420;//window.location.port;

    useEffect(() => {
        const socket = socketIO(`ws://${window.location.hostname}:${port}`);
        setSocket(socket.connect());
    }, []);

    if (!socket)
        return (<div>Connecting to server...</div>);

    return (
        <TunnelContext.Provider value={socket}>
            {children}
        </TunnelContext.Provider>
    )
}
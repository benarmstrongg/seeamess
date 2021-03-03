import { createContext } from "react";
import { Socket } from "socket.io-client";

// TODO gotta change this defaultValue
export const TunnelContext = createContext<Socket>(null as any)
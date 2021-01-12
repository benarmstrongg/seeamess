import { Socket } from "socket.io-client";
import { SeeamessConfig } from "./SeeamessConfig";
import { TabState } from "./TabState";

export interface AppState {
    files: { [filePath: string]: string },
    config: SeeamessConfig,
    socket: Socket,
    tabs: TabState[],
    activeTab: number
}
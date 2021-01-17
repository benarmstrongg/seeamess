import { Socket } from "socket.io-client";
import { TabState, SeeamessConfig } from ".";

export type AppDispatch =
    {
        event: 'setConfig',
        data: SeeamessConfig
    } |
    {
        event: 'setSocket',
        data: Socket
    } |
    {
        event: 'setFiles',
        data: any
    } |
    {
        event: 'openFile',
        data: string
    } |
    {
        event: 'closeTab',
        data: TabState
    } |
    {
        event: 'setActiveTab',
        data: TabState
    } |
    {
        event: 'saveFile',
        data: 'JsFileInfo'
    }
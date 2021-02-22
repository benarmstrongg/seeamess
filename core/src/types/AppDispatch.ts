import { Socket } from "socket.io-client";
import { SeeamessConfig } from ".";

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
        data: number
    } |
    {
        event: 'setActiveTab',
        data: number
    } |
    {
        event: 'saveFile',
        data: 'JsFileInfo'
    }
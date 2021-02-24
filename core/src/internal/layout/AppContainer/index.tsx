import React, { FC, useEffect, useState } from "react"
import { getConfig } from "../../code/config/getConfig";
import { EditorSection } from "../../sections/EditorSection";
import { io as socketIO, Socket } from 'socket.io-client';
import './styles.scss';
import { ExplorerSection } from "../../sections/ExplorerSection";
import { SeeamessState } from "../../../types";
import { SeeamessContextProvider } from "../../../hooks";
import { ContentObject } from "../../../types/ContentObject";

export const AppContainer: FC = () => {
    const [config, setConfig] = useState<SeeamessState['config']>();
    const [content, setContent] = useState<SeeamessState['content']>();
    const [socket, setSocket] = useState<Socket>();

    useEffect(() => {
        const load = async () => {
            const _config = await getConfig();
            setConfig(_config);
        }
        load();
    });

    useEffect(() => {
        if (!config)
            return;
        const socket = socketIO(`ws://${window.location.hostname}:${config.port}`);
        setSocket(socket.connect());
    }, [config]);

    useEffect(() => {
        if (!socket)
            return;
        socket.on('setFiles', (files: any) => {
            const filesObj: { [path: string]: ContentObject } = {};
            Object.entries<string>(files).forEach(([path, text]) => {
                filesObj[path] = {
                    contentType: 'files',
                    objectName: path,
                    containingFilePath: path,
                    initialValue: text
                };
            })
            setContent({ files: filesObj });
        });
    }, [socket]);

    if (!config)
        return (<div>Loading project configuration...</div>);

    if (!socket)
        return (<div>Connecting to server...</div>);

    if (!content)
        return (<div>Waiting for project files...</div>);

    return (
        <div className="AppContainer">
            <SeeamessContextProvider config={config} content={content}>
                <ExplorerSection />
                <EditorSection />
            </SeeamessContextProvider>
        </div>
    )
}
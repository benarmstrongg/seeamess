import React, { FC, useEffect } from "react"
import { getConfig } from "../../config/getConfig";
import { useSeeamess } from "../../context/SeeamessContext";
import { Workspace } from "../Workspace";
import { FileExplorer } from "../FileExplorer";
import { io as socketIO } from 'socket.io-client';
import './styles.scss';

export const AppContainer: FC = () => {
    const { state, dispatch } = useSeeamess();

    useEffect(() => {
        const load = async () => {
            const config = await getConfig();
            dispatch({ event: 'setConfig', data: config });
        }
        load();
    }, [dispatch]);

    useEffect(() => {
        if (!state.config)
            return;
        const socket = socketIO(`ws://${window.location.hostname}:${state.config.port}`);
        socket.connect();
        dispatch({ event: 'setSocket', data: socket });
    }, [state.config, dispatch]);

    useEffect(() => {
        if (!state.socket)
            return;
        state.socket.on('setFiles', (files: any) => {
            dispatch({ event: 'setFiles', data: files })
        });
    }, [state.socket, dispatch]);

    if (!state.config)
        return (<div>Loading project configuration...</div>);

    if (!state.socket)
        return (<div>Connecting to server...</div>);

    if (!state.files)
        return (<div>Waiting for project files...</div>);

    return (
        <div className="AppContainer">
            <FileExplorer filePaths={Object.keys(state.files)} />
            <Workspace />
        </div>
    )
}
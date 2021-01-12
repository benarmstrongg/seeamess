import express from 'express';
import { Socket } from 'socket.io';
import * as fileExplorer from '../file-explorer';
import * as server from '../server';
import cors from 'cors';

export const start = async () => {
    // const config = fileExplorer.readConfig();
    const config = { projectDir: require('path').join(__dirname, '..', '..', '__demo'), port: 420 };
    const { webServer, socketServer } = server.create(config);
    const projectFiles = await fileExplorer.readProjectFiles(config.projectDir);

    const uiPath = fileExplorer.getUiPath(config.projectDir);
    webServer.use(express.static(uiPath));
    webServer.use(express.static(config.projectDir));
    webServer.use(cors({ allowedHeaders: '*' }));
    webServer.get('/', (_, res) => res.sendFile(uiPath));
    webServer.get('/config', (_, res) => res.send(config));
    socketServer.on('saveFile', (filePath, fileText) => fileExplorer.saveFile(filePath, fileText));
    socketServer.on('connection', (socket: Socket) => {
        socket.emit('setFiles', projectFiles);
    })
}

start();
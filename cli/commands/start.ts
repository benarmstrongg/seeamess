import express from 'express';
import { Socket } from 'socket.io';
import * as fileExplorer from '../file-explorer';
import * as server from '../server';
import cors from 'cors';

const mockConfig = {
    projectDir: require('path').join(__dirname, '..', '..', '__demo'),
    port: 420,
    editors: ['react', 'code', 'statement'],
    explorers: ['file', 'react'],
    compilerOptions: {
        allowJs: true
    }
}

export const start = async () => {
    const config = mockConfig; // await fileExplorer.readConfig();
    const { webServer, socketServer } = server.create(config);
    const projectFiles = await fileExplorer.readProjectFiles(config.projectDir);

    const uiPath = fileExplorer.getUiPath(config.projectDir);
    webServer.use(express.static(uiPath));
    webServer.use(express.static(config.projectDir));
    webServer.use(cors({ allowedHeaders: '*' }));
    webServer.get('/', (_, res) => res.sendFile(uiPath));
    socketServer.on('saveFile', (filePath, fileText) => fileExplorer.saveFile(filePath, fileText));
    socketServer.on('connection', (socket: Socket) => {
        console.log('files sent');
        socket.emit('project.init', config, projectFiles);
    });
}

start();
import express from 'express';
import socketio from 'socket.io';
import { SeeamessConfig } from '../types'

export const create = (config: SeeamessConfig) => {
    const webServer = express();
    const httpServer = webServer.listen(config.port);
    const socketServer = new socketio.Server(httpServer, { cors: { origin: '*' } });
    return { webServer, socketServer };
}
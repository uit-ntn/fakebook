import { Socket, io } from 'socket.io-client';
import { API_ENDPOINT } from '../utils/endpoints';

export const SOCKET_ENDPOINT = 'http://localhost:5000';

export const socket: Socket = io(`${SOCKET_ENDPOINT}/chat`, {
    transports: ['websocket'],
    reconnection: true,
});

export const socketOn = (eventName: any, callback: any) => {
    return socket.on(eventName, callback);
};

export const socketConnect = () => {
    return socket.connect();
};

export const socketOff = (eventName: any) => {
    return socket.off(eventName);
};

export const socketDisconnect = () => {
    return socket.disconnect();
};

export const socketEmit = (eventName: any, origin: any) => {
    return socket.emit(eventName, origin);
};

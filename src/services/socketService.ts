import { Socket, io } from 'socket.io-client';
import { API_ENDPOINT } from '../utils/endpoints';

export const socket: Socket = io(`${API_ENDPOINT}/chat`, {
    transports: ['websocket', 'polling'],
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

import { Server } from "socket.io";
import http from 'http'; 
import express from 'express';

const app = express(); 
const server = http.createServer(app);

// Initializing a Socket.IO server instance and configuring it
const io = new Server(server, {
    cors: { 
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
    }
});

export const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId];
};


const userSocketMap = {}; //{userId: socketId}

// Event listener for a new client connection to the Socket.IO server
io.on('connection', (socket) => {
    console.log('a user connected', socket.id); 

    const userId = socket.handshake.query.userId;
    if(userId != "undefined") userSocketMap[userId] = socket.id;

    //io.emit() is used to send a message to all connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    // socket.on() is used to listen to the events. It can be used both on client and server side
    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

export { app, io, server };
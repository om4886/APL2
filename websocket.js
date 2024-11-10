const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const uuid = require('uuid');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Store active connections
const clients = new Map();

// Store chat history
const chatHistory = [];
const MAX_HISTORY = 50;

// Broadcast message to all connected clients
const broadcast = (message, sender) => {
  const messageData = {
    id: uuid.v4(),
    text: message,
    sender: sender,
    timestamp: new Date().toISOString()
  };

  // Add to chat history
  chatHistory.push(messageData);
  if (chatHistory.length > MAX_HISTORY) {
    chatHistory.shift();
  }

  // Broadcast to all clients
  const messageStr = JSON.stringify(messageData);
  clients.forEach((client) => {
    if (client.ws.readyState === WebSocket.OPEN) {
      client.ws.send(messageStr);
    }
  });
};

// Handle new WebSocket connections

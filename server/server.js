const express = require("express");
const WebSocket = require("ws");
const cors = require("cors");

const app = express();
app.use(cors());

const server = app.listen(5000, () => {
  console.log("Server running on port 5000");
});

const wss = new WebSocket.Server({ server });

// 🔹 Global chat history (compulsory)
let messages = [];

wss.on("connection", (ws) => {
  console.log("Client connected");

  // send chat history
  ws.send(
    JSON.stringify({
      type: "history",
      messages: messages,
    })
  );

  ws.on("message", (data) => {
    const payload = JSON.parse(data);

    // 🔴 CLEAR CHAT FOR EVERYONE
    if (payload.type === "clear") {
      messages = [];

      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: "clear" }));
        }
      });
      return;
    }

    // 🟢 NORMAL MESSAGE
    if (payload.type === "message") {
      messages.push(payload);

      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(
            JSON.stringify({
              type: "message",
              message: payload,
            })
          );
        }
      });
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

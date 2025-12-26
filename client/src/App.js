import React, { useEffect, useRef, useState } from "react";
import "./App.css";

/* per-tab user (only for UI alignment) */
let myId = sessionStorage.getItem("chat_user_id");
let myName = sessionStorage.getItem("chat_user_name");

if (!myId) {
  myId = Math.random().toString(36).substring(2);
  myName = "User" + Math.floor(Math.random() * 1000);

  sessionStorage.setItem("chat_user_id", myId);
  sessionStorage.setItem("chat_user_name", myName);
}

function App() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = new WebSocket("ws://localhost:5000");

    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "history") {
        setMessages(data.messages);
        return;
      }

      if (data.type === "clear") {
        setMessages([]);
        return;
      }

      if (data.type === "message") {
        setMessages((prev) => [...prev, data.message]);
      }
    };

    return () => {
      socketRef.current.close();
    };
  }, []);

  const sendMessage = () => {
    if (!text.trim()) return;

    socketRef.current.send(
      JSON.stringify({
        type: "message",
        text: text,
        time: new Date().toLocaleTimeString(),
        senderId: myId,
        senderName: myName,
      })
    );

    setText("");
  };

  const clearChat = () => {
    socketRef.current.send(
      JSON.stringify({ type: "clear" })
    );
  };

  return (
    <div className="page">
      <div className="chat-container">
        {/* Header */}
        <div className="chat-header">
          <div>
            <div className="chat-title">Chat Server</div>
            <div className="chat-subtitle">online</div>
          </div>

          <button className="clear-btn" onClick={clearChat}>
            Clear for Everyone
          </button>
        </div>

        {/* Messages */}
        <div className="chat-box">
          {messages.map((msg, index) => {
            const isSender = msg.senderId === myId;

            return (
              <div
                key={index}
                className={`message ${
                  isSender ? "sender" : "receiver"
                }`}
              >
                {!isSender && (
                  <div className="username">{msg.senderName}</div>
                )}
                <p>{msg.text}</p>
                <span>{msg.time}</span>
              </div>
            );
          })}
        </div>

        {/* Input */}
        <div className="input-area">
          <input
            type="text"
            placeholder="Type a message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && sendMessage()
            }
          />
          <button onClick={sendMessage}>➤</button>
        </div>
      </div>
    </div>
  );
}

export default App;


import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./chat.css";

function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lightMode, setLightMode] = useState(true);
  const chatEndRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Auto reset chat after 30 seconds
  useEffect(() => {
    if (messages.length > 0) {
      const timer = setTimeout(() => setMessages([]), 30000);
      return () => clearTimeout(timer);
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userText = message;
    setMessage("");

    setMessages((prev) => [...prev, { sender: "user", text: userText }]);

    setLoading(true);
    try {
      const res = await axios.post("http://127.0.0.1:5000/api/chat", { message: userText });
      setMessages((prev) => [...prev, { sender: "agent", text: res.data.response }]);
    } catch (error) {
      setMessages((prev) => [...prev, { sender: "agent", text: "Server error. Check backend." }]);
    }
    setLoading(false);
  };

  return (
    <div className={`chat-container ${lightMode ? "light" : "dark"}`}>
      {/* Theme Toggle */}
      <div className="theme-toggle">
        <button onClick={() => setLightMode(!lightMode)}>
          {lightMode ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      {/* Chat Messages */}
      <div className="chat-area">
        {messages.length === 0 && (
          <div className="welcome">
            <h2>Hello 👋</h2>
            <p>Chat will auto reset after 30 seconds</p>
          </div>
        )}

        {messages.map((msg, index) => (
          <div key={index} className={`message-row ${msg.sender}`}>
            <div className={`message-bubble ${msg.sender}`}>{msg.text}</div>
          </div>
        ))}

        {loading && (
          <div className="message-row agent">
            <div className="message-bubble agent typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div className="input-area">
        <input
          type="text"
          className="chat-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask something..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className="send-button" onClick={sendMessage}>
          ➤
        </button>
      </div>
    </div>
  );
}

export default Chat;
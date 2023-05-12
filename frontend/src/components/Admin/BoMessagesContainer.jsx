import React, { useState, useEffect } from "react";
import "@assets/CSS/MessagesContainer.css";
import axios from "axios";

function BoMessagesContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/messages`)
      .then((response) => {
        setMessages(response.data);
      });
  }, []);

  const messagesEndRef = React.useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const renderMessages = () => {
    return messages.map((message) => {
      if (message.author === 2) {
        return (
          <div key={message.id} className="message__outer">
            <div className="message__inner_sent">
              <div className="message__bubble_sent">
                <div className="message__text">{message.content}</div>
              </div>
              <div className="message__spacer" />
            </div>
          </div>
        );
      }
      return (
        <div key={message.id} className="message__outer">
          <div className="message__inner_received">
            <div className="message__bubble_received">
              <div className="message__text">{message.content}</div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="messages-container">
      {renderMessages()}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default BoMessagesContainer;

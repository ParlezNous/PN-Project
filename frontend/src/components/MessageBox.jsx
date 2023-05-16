import "../assets/CSS/MessageBox.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import micIcon from "../assets/mic-icon.svg";
import sentIcon from "../assets/send-icon.svg";
import attachIcon from "../assets/attach-icon.svg";

function MessageBox() {
  const [messages, setMessages] = useState({ author: 1, content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessages({
      ...messages,
      [name]: value,
    });
  };

  const sendMessage = () => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/messages`, {
      author: messages.author,
      content: messages.content,
    });
  };

  const sendIcon = () => {
    if (messages.content.length !== 0) {
      return (
        <div className="send_icon">
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <Link to="/ABC123">
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
            <img
              src={sentIcon}
              alt="send"
              onClick={() => {
                sendMessage();
              }}
            />
          </Link>
        </div>
      );
    }
    return (
      <div className="mic_icon">
        <img src={micIcon} alt="mic" />
      </div>
    );
  };

  return (
    <div className="messageSent_Container">
      <div className="messageSent_box">
        <div className="attachement_icon">
          <img src={attachIcon} alt="attachement" />
        </div>
        <div className="message-input">
          <input
            id="inputValue"
            onChange={handleChange}
            name="content"
            type="text"
            placeholder="Ecrivez votre message ici"
          />
        </div>
        {sendIcon()}
      </div>
    </div>
  );
}

export default MessageBox;

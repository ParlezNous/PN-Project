import "../assets/CSS/MessageBox.css";
import { useState } from "react";
import axios from "axios";
import micIcon from "../assets/mic-icon.svg";
import sentIcon from "../assets/send-icon.svg";
import attachIcon from "../assets/attach-icon.svg";

function MessageBox() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState({ author: 1, content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessages({
      ...messages,
      [name]: value,
    });
  };

  const sendMessage = () => {
    axios.post("http://localhost:5501/messages", {
      author: messages.author,
      content: messages.content,
    });
  };

  const refreshPage = () => {
    window.location.reload(true);
  };

  const sendIcon = () => {
    if (messages.content.length !== 0) {
      return (
        <div className="send_icon">
          <img
            src={sentIcon}
            alt="send"
            onClick={() => {
              sendMessage();
              refreshPage();
            }}
          />
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

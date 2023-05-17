import "../assets/CSS/MessageBox.css";
import { useState } from "react";
import axios from "axios";
import sendIcon from "../assets/send-icon.svg";
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

  const refreshPage = () => {
    window.location.reload(true);
  };

  const sendMessage = async () => {
    await axios.post("https://powerful-plateau-78644.herokuapp.com/messages", {
      author: 1,
      content: messages.content,
    });
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
        <div className="send_icon">
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <img
            src={sendIcon}
            alt="send"
            onClick={() => {
              sendMessage();
              refreshPage();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MessageBox;

import "@assets/CSS/MessageBox.css";
import { useState } from "react";
import axios from "axios";
import micIcon from "@assets/mic-icon.svg";
import sentIcon from "@assets/send-icon.svg";
import attachIcon from "@assets/attach-icon.svg";

function MessageBox() {
  const [messages, setMessages] = useState({ author: 2, content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessages({
      ...messages,
      [name]: value,
    });
  };

  const sendMessage = async () => {
    const refreshPage = () => {
      window.location.reload(true);
    };
    await axios.post("https://powerful-plateau-78644.herokuapp.com/messages", {
      author: 2,
      content: messages.content,
    });
    refreshPage();
  };

  const refreshPage = () => {
    window.location.reload(true);
  };

  const sendIcon = () => {
    if (messages.content.length !== 0) {
      return (
        <div className="send_icon">
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
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

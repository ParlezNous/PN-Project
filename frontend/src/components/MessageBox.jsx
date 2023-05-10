import "../assets/CSS/MessageBox.css";
import { useState } from "react";
import micIcon from "../assets/mic-icon.svg";
import sentIcon from "../assets/send-icon.svg";
import attachIcon from "../assets/attach-icon.svg";

function MessageBox() {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const sendIcon = () => {
    if (inputValue.length !== 0) {
      return (
        <div className="send_icon">
          <img src={sentIcon} alt="send" />
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
            onChange={handleInput}
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

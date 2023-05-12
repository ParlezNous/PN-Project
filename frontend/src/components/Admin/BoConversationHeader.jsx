import "@assets/CSS/Admin/BoConversationHeader.css";
import "@fontsource/montserrat";
import "@fontsource/montserrat/700.css";
import { useState, useEffect } from "react";
import editIcon from "@assets/edit-icon.svg";
import backIcon from "@assets/back-icon.svg";
import { Link } from "react-router-dom";
import axios from "axios";

function BoConversationHeader() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/1`).then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <div className="conversation-header">
      <div className="conversation-header__information">
        <div className="returnButton">
          <Link to="/admin">
            <img src={backIcon} alt="back" />
          </Link>
        </div>
        <div className="conversation-header__information__left">
          <div className="titleConversation">
            <span>
              {user.firstname} {user.name}
            </span>
          </div>
          <div className="dataConversation">{user.phone}</div>
        </div>
        <div className="conversation-header__information__right">
          <Link to="/profil">
            <div className="editInformations">
              <img src={editIcon} alt="edit" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BoConversationHeader;

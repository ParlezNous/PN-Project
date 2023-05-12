import "@assets/CSS/Admin/BoConversationHeader.css";
import "@fontsource/montserrat";
import "@fontsource/montserrat/700.css";
import editIcon from "@assets/edit-icon.svg";
import backIcon from "@assets/back-icon.svg";
import { Link } from "react-router-dom";

function BoProfilHeader() {
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
            <span>Franck LECOQ</span>
          </div>
          <div className="dataConversation">+33 6 64 21 22 98</div>
        </div>
        <div className="conversation-header__information__right">
          <div className="editInformations">
            <img src={editIcon} alt="edit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoProfilHeader;

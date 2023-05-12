import "../../assets/CSS/Admin/BoTopbar.css";
import "@fontsource/montserrat";
import { Link } from "react-router-dom";
import backIcon from "@assets/back-icon.svg";

function BoProfilTopbar() {
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
            <span>Profil</span>
          </div>
          <div className="dataConversation">Franck Lecoq</div>
        </div>
      </div>
    </div>
  );
}

export default BoProfilTopbar;

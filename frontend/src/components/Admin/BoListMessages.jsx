import "../../assets/CSS/Admin/BoListMessages.css";
import "@fontsource/montserrat";
import { Link } from "react-router-dom";
import iconMessage from "../../assets/icon-messages.svg";

function BoListMessages() {
  return (
    <div className="listMessages">
      <Link to="/admin/message">
        <div className="message">
          <div className="iconMessage">
            <img src={iconMessage} alt="iconMessage" />
          </div>
          <div className="messageContent">
            <div className="messageAuthor"> Franck Lecoq </div>
            <div className="extractMessage">
              Bonjour, je voudrais un roti ...
            </div>
          </div>
          <div className="messageDate"> 12/12/2020 </div>
        </div>
      </Link>
    </div>
  );
}

export default BoListMessages;

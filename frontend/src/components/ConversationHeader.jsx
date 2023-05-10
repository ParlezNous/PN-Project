import "../assets/CSS/ConversationHeader.css";
import "@fontsource/montserrat";
import "@fontsource/montserrat/700.css";

function ConversationHeader() {
  return (
    <div className="conversation-header">
      <div className="conversation-header__information">
        <div className="titleConversation">
          Conversation avec <span>la Petite Italie</span>
        </div>
        <div className="dataConversation">démarrée le 15 mai 2023</div>
      </div>
    </div>
  );
}

export default ConversationHeader;

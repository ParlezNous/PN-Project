import "../assets/CSS/MessagesContainer.css";

function MessagesContainer() {
  return (
    <div className="messages-container">
      <div className="message-box">
        <div className="message-box__message">
          <div className="message-box__message__content">
            <div className="message-box__message__content__text">
              <p>Salut, comment vas-tu ?</p>
            </div>
            <div className="message-box__message__content__date">
              <p>15:30</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagesContainer;

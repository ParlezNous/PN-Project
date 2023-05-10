import "../assets/CSS/Widget.css";
import ConversationHeader from "@components/ConversationHeader";
import Footer from "@components/Footer";
import MessageBox from "@components/MessageBox";
import MessagesContainer from "@components/MessagesContainer";

function Widget() {
  return (
    <div className="widget">
      <ConversationHeader />
      <MessagesContainer />
      <MessageBox />
      <Footer />
    </div>
  );
}

export default Widget;

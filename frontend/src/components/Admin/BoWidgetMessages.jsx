import "@assets/CSS/Widget.css";
import Footer from "@components/Footer";
import BoMessagesContainer from "@components/Admin/BoMessagesContainer";
import BoMessageBox from "@components/Admin/BoMessageBox";
import BoConversationHeader from "@components/Admin/BoConversationHeader";

function BoWidgetMessages() {
  return (
    <div className="widget">
      <BoConversationHeader />
      <BoMessagesContainer />
      <BoMessageBox />
      <Footer />
    </div>
  );
}

export default BoWidgetMessages;

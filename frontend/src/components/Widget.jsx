import "../assets/CSS/Widget.css";
import TopBar from "@components/TopBar";
import ShopMiddle from "@components/ShopMiddle";
import ButtonActionHome from "@components/ButtonActionHome";
import HelpConversation from "@components/HelpConversation";
import Footer from "@components/Footer";

function Widget() {
  return (
    <div className="widget">
      <TopBar />
      <ShopMiddle />
      <ButtonActionHome />
      <HelpConversation />
      <Footer />
    </div>
  );
}

export default Widget;

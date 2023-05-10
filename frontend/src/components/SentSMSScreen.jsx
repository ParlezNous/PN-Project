import "../assets/CSS/Widget.css";
import Footer from "@components/Footer";
import SMSDescribe from "@components/SMSDescribe";
import ShopImage from "../assets/shop-photo-home.png";

function SentSMSScreen() {
  return (
    <div className="widget">
      <SMSDescribe />
      <div className="shoperPhoto">
        <img src={ShopImage} alt="ShopPhoto" />
      </div>
      <Footer />
    </div>
  );
}

export default SentSMSScreen;

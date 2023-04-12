import "../assets/CSS/ShopMiddle.css";
import ShopImage from "../assets/shop-photo-home.png";
import "../assets/CSS/font.css";

function ShopMiddle() {
  return (
    <div className="shopMiddle">
      <div className="shopMiddle_left">
        <img src={ShopImage} alt="ShopPhoto" />
      </div>
      <div className="shopMiddle_right">
        <div className="shopMiddle_message">
          "Comment puis-je vous aider aujourd'hui ?"
        </div>
      </div>
    </div>
  );
}

export default ShopMiddle;

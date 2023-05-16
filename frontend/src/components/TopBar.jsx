import "../assets/CSS/TopBar.css";
import { Link } from "react-router-dom";
import shopInfos from "../assets/shopInfos.svg";
import "@fontsource/montserrat";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/200.css";

function TopBar() {
  return (
    <div className="topBar">
      <section className="topBar_left">
        <div className="salutationMessage">
          Bienvenue chez <span className="shopName">la Petite Italie</span>
        </div>
      </section>
      <section className="topBar_right">
        <div className="askInformations">
          <Link to="/ABC123">
            <img src={shopInfos} alt="Shop Infos" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default TopBar;

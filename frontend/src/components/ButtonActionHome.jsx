import "../assets/CSS/ButtonAction.css";
import "@fontsource/montserrat";
import "@fontsource/montserrat/700.css";
import { Link } from "react-router-dom";

function ButtonActionHome() {
  return (
    <div className="buttonActionArea">
      <Link to="pscollect">
        <button type="button" className="buttonAction">
          Démarrer une conversation
        </button>
      </Link>
    </div>
  );
}

export default ButtonActionHome;

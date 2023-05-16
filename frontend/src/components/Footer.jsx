import "../assets/CSS/Footer.css";
import { Link } from "react-router-dom";
import logoFooter from "../assets/logo-footer.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        Propulsé par
        <Link to="/admin">
          <img src={logoFooter} alt="logo" className="logoFooter" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;

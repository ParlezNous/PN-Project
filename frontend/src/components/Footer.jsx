import "../assets/CSS/Footer.css";
import logoFooter from "../assets/logo-footer.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        Propulsé par
        <img src={logoFooter} alt="logo" className="logoFooter" />
      </div>
    </div>
  );
}

export default Footer;

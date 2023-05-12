import "../../assets/CSS/Admin/BoNavbar.css";
import "@fontsource/montserrat";

function BoNavbar() {
  return (
    <div className="boNavbar">
      <div className="navbarLink">
        <a href="/admin">Nouveau</a>
      </div>
      <div className="navbarLink">
        <a href="/admin">En cours</a>
      </div>
      <div className="navbarLink">
        <a href="/admin">Clôturé</a>
      </div>
    </div>
  );
}

export default BoNavbar;

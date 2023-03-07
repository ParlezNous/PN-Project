import "../assets/CSS/NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavBar__home">
        <img src="https://i.imgur.com/1ZQZ1Zm.png" alt="logo" />
        Accueil
      </div>
      <div className="NavBar__demandes">
        <img src="https://i.imgur.com/1ZQZ1Zm.png" alt="logo" />
        Demandes
      </div>
      <div className="NavBar__commandes">
        <img src="https://i.imgur.com/1ZQZ1Zm.png" alt="logo" />
        Commandes
      </div>
      <div className="NavBar__messages">
        <img src="#" alt="logo" />
        Messages
      </div>
    </div>
  );
}

export default NavBar;

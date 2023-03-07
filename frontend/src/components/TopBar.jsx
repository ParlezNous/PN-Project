import "../assets/CSS/TopBar.css";
import avatarUser from "../assets/avatar_user.png";

function TopBar() {
  return (
    <div className="topBar">
      <section className="topBar_left">
        <div className="salutationMessage">
          Bonjour <span className="userFname"> Jean-Michel ! 👏</span>
        </div>
        <div className="statusMessage"> Vous avez 9 messages non lus</div>
      </section>
      <section className="topBar_right">
        <div className="topBar_right_item">
          <img src={avatarUser} alt="Avatar User" />
        </div>
      </section>
    </div>
  );
}

export default TopBar;

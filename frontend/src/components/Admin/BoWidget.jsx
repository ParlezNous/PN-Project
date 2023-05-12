import "@assets/CSS/Widget.css";
import BoTopbar from "@components/Admin/BoTopbar";
import Footer from "@components/Footer";
import BoNavbar from "@components/Admin/BoNavbar";
import BoListMessages from "@components/Admin/BoListMessages";

function BoWidget() {
  return (
    <div className="widget">
      <BoTopbar />
      <BoNavbar />
      <BoListMessages />
      <Footer />
    </div>
  );
}

export default BoWidget;

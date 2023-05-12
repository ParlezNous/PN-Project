import "@assets/CSS/Widget.css";
import Footer from "@components/Footer";
import BoProfilTopbar from "@components/Admin/BoProfilTopbar";
import BoProfilContainer from "@components/Admin/BoProfilContainer";

function BoWidgetProfil() {
  return (
    <div className="widget">
      <BoProfilTopbar />
      <BoProfilContainer />

      <Footer />
    </div>
  );
}

export default BoWidgetProfil;

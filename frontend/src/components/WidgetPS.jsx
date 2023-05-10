import "../assets/CSS/Widget.css";
import Footer from "@components/Footer";
import PisDescribe from "@components/PisDescribe";
import FieldsPS from "@components/FieldPS";
import ConsentRGPD from "@components/ConsentRGPD";

function Widget() {
  return (
    <div className="widget">
      <PisDescribe />
      <FieldsPS />
      <ConsentRGPD />
      <Footer />
    </div>
  );
}

export default Widget;

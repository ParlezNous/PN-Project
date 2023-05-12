import "@assets/CSS/Home.css";
import "@assets/CSS/Widget.css";
import BoWidgetMessages from "@components/Admin/BoWidgetMessages";

export default function BoMessageScreen() {
  return (
    <div className="widgetEmbed">
      <div className="widget">
        <BoWidgetMessages />
      </div>
    </div>
  );
}

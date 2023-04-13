import "../assets/CSS/FieldsPS.css";

const FieldsPS = () => {
  return (
  <div className="fieldsPS">
    <div className="fieldsPS_item">
      <div className="fieldsPS_name">
        Nom :
      </div>
        <div className="fieldsPS_value">
            <input type="text" name="name" id="name" />
        </div>
      <div className="fieldsPS_name">
        Prénom :
      </div>
        <div className="fieldsPS_value">
            <input type="text" name="firstname" id="firstname" />
        </div>
        <div className="fieldsPS_name">
          Téléphone :
        </div>
        <div className="fieldsPS_value">
            <input type="text" name="phone" id="phone" />
        </div>
    </div>
  </div>
      );
};

export default FieldsPS;

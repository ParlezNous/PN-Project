import "../assets/CSS/FieldsPS.css";
import { useState } from "react";
import axios from "axios";

function FieldsPS() {
  const [data, setData] = useState({ name: "", firstname: "", phone: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const linkto = () => {
    window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/sentSMS`;
  };

  const createUser = () => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/users`, {
      name: data.name,
      firstname: data.firstname,
      phone: data.phone,
    });
  };

  return (
    <div className="fieldsPS">
      <div className="fieldsPS_item">
        <div className="fieldsPS_name">Nom :</div>
        <div className="fieldsPS_value">
          <input type="text" name="name" id="name" onChange={handleChange} />
        </div>
        <div className="fieldsPS_name">Prénom :</div>
        <div className="fieldsPS_value">
          <input
            type="text"
            name="firstname"
            id="firstname"
            onChange={handleChange}
            required
          />
        </div>
        <div className="fieldsPS_name">Téléphone :</div>
        <div className="fieldsPS_value">
          <input type="text" name="phone" id="phone" onChange={handleChange} />
        </div>
      </div>
      <div className="buttonActionArea">
        <button
          type="button"
          className="buttonAction"
          onClick={() => {
            createUser();
            linkto();
          }}
        >
          Suivant
        </button>
      </div>
    </div>
  );
}

export default FieldsPS;

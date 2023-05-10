import "../assets/CSS/FieldsPS.css";
import { useState, useEffect } from "react";
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
    window.location.href = "http://localhost:5173/sentSMS";
  };

  console.log(data);

  const createUser = () => {
    axios
      .post("http://localhost:5501/users", {
        name: data.name,
        firstname: data.firstname,
        phone: data.phone,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
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

import React, { useState, useEffect } from "react";
import "@assets/CSS/MessagesContainer.css";
import axios from "axios";

function BoProfilContainer() {
  const [data, setData] = useState({ name: "", firstname: "", phone: "" });

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/1`).then((res) => {
      setData(res.data);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const updateUser = () => {
    axios.put(`${import.meta.env.VITE_BACKEND_URL}/users/1`, {
      name: data.name,
      firstname: data.firstname,
      phone: data.phone,
    });
  };

  const linkto = () => {
    window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/admin/message`;
  };

  return (
    <div className="fieldsPS">
      <div className="fieldsPS_item">
        <div className="fieldsPS_name">Nom :</div>
        <div className="fieldsPS_value">
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div className="fieldsPS_name">Prénom :</div>
        <div className="fieldsPS_value">
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={data.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="fieldsPS_name">Téléphone :</div>
        <div className="fieldsPS_value">
          <input
            type="text"
            name="phone"
            id="phone"
            value={data.phone}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="buttonActionArea">
        <button
          type="button"
          className="buttonAction"
          onClick={() => {
            updateUser();
            linkto();
          }}
        >
          Enregistrer
        </button>
      </div>
    </div>
  );
}

export default BoProfilContainer;

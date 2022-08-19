import React, { useState } from "react";
import QRCode from "qrcode";

import "./qrCode.css";

//Cokkies for use name of restaurante and user category
import Cookies from "universal-cookie";

const QrCode = () => {
  const [imageUrl, setImageUrl] = useState("");
  const currentUrl = window.location.href;
  //console.log(currentUrl)
  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(currentUrl);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };

  const cookies = new Cookies();
  const userType = cookies.get("TipoUsuario");

  return (
    <div className="container">
      <button
        className={`${
          !userType || userType === "Comensal"
            ? "custom-btn d-none"
            : "custom-btn active"
        }`}
        onClick={() => generateQrCode()}
      >
        {" "}
        Genera tu QR{" "}
      </button>

      <br />

      {imageUrl ? (
        <a href={imageUrl} download>
          <img src={imageUrl} alt="img" />
        </a>
      ) : null}

      {imageUrl ? (
        <a href={imageUrl} download>
          <img src={imageUrl} alt="img" />
        </a>
      ) : null}
    </div>
  );
};

export default QrCode;

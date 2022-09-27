import React, { useState } from "react";
import QRCode from "qrcode";

import "./qrCode.css";

//Cokkies for use name of restaurante and user category
import Cookies from "universal-cookie";

const QrCode = () => {
  const [imageUrl, setImageUrl] = useState("");
  const currentUrl = window.location.href;
  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(currentUrl, { width: 200 });
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };

  const cookies = new Cookies();
  const userType = cookies.get("TipoUsuario");

  function renderQr() {
    if (userType) {
      if (userType === "Administrador de restaurante") {
        return (
          <div className="container qrSection">
            <div>
              <button
                className="custom-btn ms-auto"
                onClick={() => generateQrCode()}
              >
                Genera tu QR
              </button>
            </div>

            <div>
              {imageUrl ? (
                <a href={imageUrl} download>
                  <img src={imageUrl} alt="img" />
                </a>
              ) : null}
            </div>
          </div>
        );
      }
    }
  }
  const qr = renderQr();

  return <div>{qr}</div>;
};

export default QrCode;

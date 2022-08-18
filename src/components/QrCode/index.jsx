import React from "react";
import QRCode from "qrcode";

import Input from "../Input";

const generateQrCode = async ({ qr, setQr }) => {
  try {
    const response = await QRCode.toDataURL("prueba generando qr");
    console.log(response);
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="container">
      {/* <input type="text"></input> */}
      <Input
        type="text"
        placeholder="Generar_QR..."
        value={qr}
        callback={(e) => setQr(e.target.value)}
      />

      <button className=".btn" onClick={() => generateQrCode()}>
        {" "}
        Genera tu QR{" "}
      </button>
    </div>
  );
};

export default generateQrCode;

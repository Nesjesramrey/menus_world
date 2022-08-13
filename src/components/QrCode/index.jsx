import React from 'react';
import QRCode from 'qrcode';

const [dishName, setDishName] = useState("");
const generateQrCode = async () => {

  try {
    const response = await QRCode.toDataURL('prueba generando qr');
    console.log(response);
  } catch (error) {
    console.log(error);
  }


  return (
    <div className='container'>
      {/* <input type="text"></input> */}
      <Input
        type="text"
        placeholder="Nombre de platillo..."
        value={dishName}
        callback={(e) => setDishName(e.target.value)}
      />

      <button className=".btn" onClick={() => generateQrCode()}> Genera tu QR </button>
    </div>
  )

}

export default generateQrCode;
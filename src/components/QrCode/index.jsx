import React, { useState } from 'react';
import QRCode from 'qrcode';

import './qrCode.css'

const QrCode = () => {

  const [imageUrl, setImageUrl] = useState('');
  const currentUrl = window.location.href;
  console.log(currentUrl)
  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(currentUrl);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container'>

      <button className="custom-btn" onClick={() => generateQrCode()}> Genera tu QR </button>


      <br />
      <br />
      <br />
      {imageUrl ? (<a href={imageUrl} download><img src={imageUrl} alt="img" /></a>) : null}

    </div>
  )
}

export default QrCode



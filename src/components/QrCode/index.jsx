import React, { useState } from 'react';
import QRCode from 'qrcode';
import {CopyToClipboard} from 'react-copy-to-clipboard';


const QrCode = () => {

  const [url, setUrl] = useState('');
  const[imageUrl, setImageUrl] = useState('');
  const generateQrCode = async () => {
    try{
            const response = await QRCode.toDataURL(url);
            setImageUrl(response);
    }catch (error){
        console.log(error);
    }
  }



  return (
    <div className='container'>
      {/* <CopyToClipboard text= "http://localhost:3002/menu/"> */}
      <input type="text" onChange={(e) => setUrl(e.target.value)} />
      <button className= "btn btn-primary" onClick={() => generateQrCode()}> Genera tu QR </button> 
      {/* </CopyToClipboard> */}

      <br />
      <br />
      <br />
      {imageUrl ? (<a href={imageUrl} download><img src={imageUrl} alt="img"/></a>): null }
      
    </div>  
  )
}

export default QrCode
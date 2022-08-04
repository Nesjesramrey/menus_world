import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { create as createMenu } from "../../services/menus";
import S3 from 'react-aws-s3';
import blobToBuffer from "blob-to-buffer";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../../src/components/Input/index";
import Select from "../../components/Select/index";

import "./Form.css";
// installed using npm install buffer --save
window.Buffer = window.Buffer || require("buffer").Buffer;

export default function Form() {
  // Local state
  const [dishName, setDishName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  let [files, setFiles] = useState([]);
  let [buffer, setBuffer] = useState([]);

  const cleanForm = () => {
    setDishName("");
    setCategory("");
    setDescription("");
    setPrice("");
  };
  const config = {
    bucketName: process.env.REACT_APP_BUCKET_NAME,
    region: process.env.REACT_APP_REGION,
    accessKeyId: process.env.REACT_APP_ACCESS,
    secretAccessKey: process.env.REACT_APP_SECRET,
}
const uploadFile = async (file) => {
  const ReactS3Client = new S3(config);
  const data = await ReactS3Client.uploadFile(file, 'estabien')
  return data

}
  const isEmpty = (value) => !value;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      isEmpty(dishName) ||
      isEmpty(category) ||
      isEmpty(description) ||
      isEmpty(price)
    ) {
      toast.error("Favor de llenar la forma completa!!!!");
      return;
    }
    if(files.length >= 1){
      console.log( buffer);
      const imageUploaded = await uploadFile(Buffer.from(buffer))

      console.log(imageUploaded);
    }
    

    const data = {
      dishName,
      category,
      description,
      price,
    };

    try {
      await createMenu(data);
      toast.success("Gracias, se registro con exito!!");
      cleanForm();
    } catch (error) {
      console.error(error);
    }
  };
  
  const { getRootProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      acceptedFiles.forEach((file)=>{
      blobToBuffer(file, (error, buffer)=>{
        console.log('buffer en dropzone', buffer);
        setBuffer(buffer)
      })
      })
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      console.log(acceptedFiles);
    },
  });
  const imagen = files.map((file) => {
    return (
      <img key={file.name} src={file.preview} alt="img" className="image" />
    );
  });

  return (
    <div className="container main_Container">
      <div className="container-form">
        <p className="title-form">MENU'S WORLD</p>
        <h2 className="subtitle">Formulario de registro de su platillo</h2>
        {/* <p className="sub_title">Ingresa tus datos aqui </p> */}

        <form onSubmit={handleSubmit}>
          <label className="label_form">Platillo:</label>
          <Input
            type="text"
            className="input_form"
            placeholder="Nombre de platillo"
            id="meal"
            name="meal"
            value={dishName}
            callback={(e) => setDishName(e.target.value)}
          />

          <label className="label_form">Descripcion:</label>
          <Input
            type="text"
            className="input_form"
            placeholder="Describe tu platillo"
            id="meal"
            name="meal"
            value={description}
            callback={(e) => setDescription(e.target.value)}
          />

          <label className="label_form">Precio:</label>
          <Input
            type="text"
            className="input_form"
            placeholder="Costo de tu platillo"
            id="meal"
            name="meal"
            value={price}
            callback={(e) => setPrice(e.target.value)}
          />
          <div className="container-image">
            <div className="dropArea" {...getRootProps()}>
              <p className="text">Arrastra la imagen de tu producto</p>
            </div>
            <div className="content-image">
              {imagen}
            </div>
          </div>
          {/* <label className="label_form">Selecciona una categoria:</label> */}
          <Select
            type="text"
            className="select_form"
            placeholder=""
            value={category}
            callback={(e) => setCategory(e.target.value)}
          />
          <div className="button_menu">
          <button type="submit" className="buttom_1">
            <strong>Registrar platillo</strong>
          </button>
          </div>
          <div className="instructions">
            <div className="instructions-form">
              <strong>Platillo:</strong>Nombre del platillo como aparece en su
              carta
            </div>
            <div className="instructions-form">
              <strong>Descripcion:</strong> Aqui puedes describir los
              ingredientes principales asi como los gramajes de tus platillos
            </div>
            <div className="instructions-form">
              <strong>Precio:</strong> Precio incluyendo los impuestos
              aplicables de tu localidad
            </div>
            <div className="instructions-form">
              <strong>Categoria del platillo:</strong> Aqui tienes que
              especificar si es una entrada, corte, postre, bebida o las
              categorias que ya tengas definidas
            </div>
          </div>
        </form>
      </div>
      <div className="containerImg">
        <img src="https://spng.pinpng.com/pngs/s/382-3827200_comida-icono-png-icons-png-comida-transparent-png.png" className="img"/>
      </div>
      <ToastContainer />
    </div>
  );
}

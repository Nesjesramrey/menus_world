import { useState } from "react";
import { useDropzone } from "react-dropzone"
import { create as createMenu } from "../../services/menus";

import { uploadFile } from 'react-s3';

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../../src/components/Input/index";
import Select from "../../components/Select/index";
import NavBar from "../../components/NavBar";

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
  const [fileToUpload, setFileToUpload] = useState(null);

  const cleanForm = () => {
    setDishName("");
    setCategory("");
    setDescription("");
    setPrice("");
  };

  // Mover todo lo relacionado al dropzone y a S3 a un componente nuevo
  const config = {
    bucketName: process.env.REACT_APP_BUCKET_NAME,
    region: process.env.REACT_APP_REGION,
    accessKeyId: process.env.REACT_APP_ACCESS,
    secretAccessKey: process.env.REACT_APP_SECRET,
  }

  const uploadFileToS3 = async (file) => {
    const newName = makeUniqueFileName(file)

    // Permitimos cambiar el nombre del archivo
    Object.defineProperty(file, 'name', {
      writable: true,
      value: newName
    });

    console.log(file)
    const data = await uploadFile(file, config)
    return data;
  }

  const makeUniqueFileName = (file) => {
    const [name, extension] = file.name.split("."); // Separamos nombre y extension
    const lastModified = "" + file.lastModified; // Convertimos el Int a String

    const newName = name + "_" + lastModified + "." + extension;

    return newName;
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

    let image_Url = null;
    if(files.length >= 1){
      const data = await uploadFileToS3(fileToUpload); // data de la imagen subida

      image_Url = data.location;
    }
    

    const data = {
      dishName,
      category,
      description,
      price,
      image_Url
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
      acceptedFiles.forEach((file) => {
        setFileToUpload(file);
      });
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
      <img key={file.name} src={file.preview} alt="img" className="image_file" />
    );
  });

  return (
    <div className="container main_Container">
      <NavBar/>
      
      
      <div className="container-form">
      {/* <p className="title-form">MENU'S WORLD</p> */}
        <div  className="subtitle"><h4>Formulario de registro de su platillo</h4></div>
        <form onSubmit={handleSubmit}>
          <div className="content_form">
          <div className="content_input">
          <label className="form_label">Platillo:</label>
          <Input
            type="text"
            placeholder="Nombre de platillo..."
            value={dishName}
            callback={(e) => setDishName(e.target.value)}
          />
          <label className="form_label">Precio:</label>
          <div className="price-categori">
          
          <Input
            type="number"
            className="input-group-text"
            placeholder="$ 0.00"
            id="meal"
            name="meal"
            value={price}
            callback={(e) => setPrice(e.target.value)}
          />
            <Select
            type="text"
            className="select_form"
            placeholder=""
            value={category}
            callback={(e) => setCategory(e.target.value)}
          />
          </div>
          <label className="form_label">Descripcion:</label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Describe tu platillo..."
            id="meal"
            name="meal"
            value={description}
            callback={(e) => setDescription(e.target.value)}/>
          </div>
          <div className="container-image">
            <div className="dropArea" {...getRootProps()}>
              <p className="text">Click o arrastra una imagen</p>
            </div>
            <div className="content-image">
              {imagen}
            </div>
          </div>         
          </div>
          <div className="instructions">
            {/* <div className="instructions-form">
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
            </div> */}
          
            <div className="button_menu">
          <button type="submit" className="buttom_1">
            <strong>Registrar platillo</strong>
          </button>
          </div>
          </div>
        
          
          {/* <label className="label_form">Selecciona una categoria:</label> */}
       
         
        </form>
      </div>
      
      <ToastContainer />
    </div>
  );
}
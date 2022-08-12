import { useState } from "react";
import { Link } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { create as createMenu } from "../../services/menus";
import Cookies from "universal-cookie";

import { uploadFile } from "react-s3";


//components
import Button from "react-bootstrap/Button";




// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Components
import Button from "react-bootstrap/Button";
import Input from "../../../src/components/Input/index";
import TextArea from "../../components/TextArea";
import Select from "../../components/Select/index";
import NavBar from "../../components/NavBar";

import "./Form.css";


// installed using npm install buffer --save
window.Buffer = window.Buffer || require("buffer").Buffer;

// cookies
const cookies = new Cookies();
const restaurant = cookies.get("NombreResturante");

export default function Form() {
  // Local state
  const [restaurantName, setRestaurantName] = useState("");
  const [dishName, setDishName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  let [files, setFiles] = useState([]);
  const [fileToUpload, setFileToUpload] = useState(null);

  const cleanForm = () => {
    setRestaurantName("");
    setDishName("");
    setCategory("");
    setDescription("");
    setPrice("");
    setFiles([]);
  };

  // Mover todo lo relacionado al dropzone y a S3 a un componente nuevo (pendiente)
  const config = {
    bucketName: process.env.REACT_APP_BUCKET_NAME,
    region: process.env.REACT_APP_REGION,
    accessKeyId: process.env.REACT_APP_ACCESS,
    secretAccessKey: process.env.REACT_APP_SECRET,
  };

  const uploadFileToS3 = async (file) => {
    const newName = makeUniqueFileName(file);

    // Permitimos cambiar el nombre del archivo
    Object.defineProperty(file, "name", {
      writable: true,
      value: newName,
    });

    console.log(file);
    const data = await uploadFile(file, config);
    return data;
  };

  const makeUniqueFileName = (file) => {
    const [name, extension] = file.name.split("."); // Separamos nombre y extension
    const lastModified = "" + file.lastModified; // Convertimos el Int a String

    const newName = name + "_" + lastModified + "." + extension;

    return newName;
  };
  const isEmpty = (value) => !value;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      isEmpty(dishName) ||
      isEmpty(category) ||
      isEmpty(restaurantName) ||
      isEmpty(description) ||
      isEmpty(price)
    ) {
      toast.error("Favor de llenar la forma completa!!!!");
      return;
    }

    let image_Url = null;
    if (files.length >= 1) {
      const data = await uploadFileToS3(fileToUpload); // data de la imagen subida

      image_Url = data.location;
      console.log(data);
    }

    const data = {
      restaurantName,
      dishName,
      category,
      description,
      price,
      image_Url,
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
      <img
        key={file.name}
        src={file.preview}
        alt="img"
        className="image_file"
      />
    );
  });

  return (
    <div className="container main_Container">
      <NavBar />

      <div className="container-form">
        <div className="subtitle">
          <h4>Formulario de registro de su platillo</h4>
        </div>
        <Button className="btn-form" bsPrefix="custom-btn" to="/menu" as={Link}>
          Regresar al menu
        </Button>
        <form onSubmit={handleSubmit}>
          <div className="content_form">
            <div className="content_input">
              <select
                type="text"
                className="form-select form-select-mg"
                placeholder=""
                value={restaurantName}
                onChange={(e) => setRestaurantName(e.target.value)}
              >
                <option value="Select">Selecciona tu restaurant</option>
                <option value={restaurant}>{restaurant}</option>
              </select>
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
              <TextArea
                type="text"
                placeholder="Describe tu platillo..."
                value={description}
                callback={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="container-image">
              <div className="dropArea" {...getRootProps()}>
                <p className="text">Click o arrastra una imagen</p>
              </div>
              <div className="content-image">{imagen}</div>
            </div>
          </div>
          <div className="instructions">
            <div className="button_menu">
              <button type="submit" className="buttom_1">
                <strong>Registrar platillo</strong>
              </button>
            </div>
          </div>
        </form>
      </div>


      <ToastContainer />


    </div>




  );
}

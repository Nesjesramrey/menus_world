import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { uploadFile } from "react-s3";
import Cookies from "universal-cookie";

//services
import { create as createUser } from "../../services/users";
import { createRestaurant } from "../../services/restaurants";
import { login as loginUser } from "../../services/users";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Components
import Input from "../../../src/components/Input/index";
import TextArea from "../../components/TextArea";

//CSS
import "./Register.css";

// installed using npm install buffer --save
window.Buffer = window.Buffer || require("buffer").Buffer;

export default function Register() {
  const navigate = useNavigate();
  //Local State
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [restaurants, setRestaurants] = useState("");
  const [descriptionRestaurant, setDescriptionRestaurant] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [itemActive, setItemActive] = useState(null);
  let [files, setFiles] = useState([]);
  const [fileToUpload, setFileToUpload] = useState(null);

  // This is to active input restaurant
  const isActive = (itemTypeUser) => itemTypeUser === itemActive;

  const cleanForm = () => {
    setUserName("");
    setEmail("");
    setRestaurants("");
    setDescriptionRestaurant("");
    setPassword("");
    setUserType("");
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

    //console.log(file);
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
  const cookies = new Cookies();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      isEmpty(username) ||
      isEmpty(email) ||
      isEmpty(password) ||
      isEmpty(userType)
    ) {
      toast.error("Se ingresaron datos incorrectos!!!!");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("La contraseña es incorrecta!!!!");
      return;
    }

    let image_Url = null;
    if (files.length >= 1) {
      const data = await uploadFileToS3(fileToUpload); // data de la imagen subida

      image_Url = data.location;
      //console.log(data);
    }

    const data = {
      username,
      email,
      password,
      restaurants,
      descriptionRestaurant,
      userType,
      image_Url,
    };

    const dataLogin = {
      email,
      password,
    };

    try {
      if (userType === "Comensal") {
        await createUser(data);
        const response = await loginUser(dataLogin);
        cookies.set("Id", response.data.info.id, { path: "/" });
        cookies.set("Usuario", response.data.info.userName, { path: "/" });
        cookies.set("TipoUsuario", response.data.info.userCategory, {
          path: "/",
        });
        cookies.set("NombreResturante", response.data.info.userRestaurant[0], {
          path: "/",
        });
        toast.success("Registro exitoso!!");
        cleanForm();
        navigate("/restaurants");
      } else {
        await createUser(data);
        await createRestaurant(data);
        const response = await loginUser(dataLogin);
        cookies.set("Usuario", response.data.info.userName, { path: "/" });
        toast.success("Registro exitoso!!");
        cleanForm();
        navigate("/restaurants");
      }
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
      //console.log(acceptedFiles);
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
    <div className="col-12 col-md-12 p-5 ">
      <div className="title-register">
        <h1 className="card-title text-center">Bienvenido a Menu's World</h1>
      </div>
      <p className="description-register">
        Con tu registro podras comentar y calificar los platillos, si eres
        administrador o dueño de un restaurante al darte de alta podras cargar
        tus platillos y generar tu propio QR
      </p>
      <div className="card-body">
        <form className="" onSubmit={handleSubmit}>
          <div className="select-control">
            <select
              type="text"
              className="form-control line-input mb-5"
              placeholder=""
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              onClick={(e) => setItemActive(e.target.value)}
            >
              <option value="Select">Selecciona tu tipo de usuario</option>
              <option value="Comensal">Comensal</option>
              <option value="Administrador de restaurante">
                Administrador de restaurante
              </option>
            </select>
          </div>
          <div className="form-group">
            <Input
              type="text"
              className="form-control line-input mb-5"
              placeholder="Nombre"
              id="meal"
              name="meal"
              value={username}
              callback={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <Input
              type="email"
              className="form-control line-input mb-5"
              placeholder="Correo electronico.   Ej. user@empresa.com"
              id="meal"
              name="meal"
              value={email}
              callback={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <Input
              type="text"
              className={`${
                isActive("Administrador de restaurante")
                  ? "form-control line-input mb-5 active"
                  : "form-control d-none"
              }`}
              placeholder="Nombre del Restaurante"
              id="meal"
              name="meal"
              value={restaurants}
              callback={(e) => setRestaurants(e.target.value)}
            />
          </div>
          <div className="form-group">
            <TextArea
              type="text"
              className={`${
                isActive("Administrador de restaurante")
                  ? "form-control line-input mb-5 active"
                  : "form-control d-none"
              }`}
              placeholder="Agregar una breve descripcion de tu restaurante..."
              value={descriptionRestaurant}
              callback={(e) => setDescriptionRestaurant(e.target.value)}
            />
          </div>
          <div
            className={`${
              isActive("Administrador de restaurante")
                ? "container-image mb-4 col-12 col-md-12 active"
                : "container-image mb-4 col-12 col-md-12 d-none"
            }`}
          >
            <div className="dropArea" {...getRootProps()}>
              <p className="text">Click o arrastra una imagen</p>
            </div>
            <div className="content-image">{imagen}</div>
          </div>

          <div className="form-group">
            <Input
              type="password"
              className="form-control line-input mb-5"
              placeholder="Contraseña"
              id="meal"
              name="meal"
              value={password}
              callback={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <Input
              type="password"
              className="form-control line-input mb-5"
              placeholder="Confirma tu contraseña"
              id="meal"
              name="meal"
              value={confirmPassword}
              callback={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="d-flex flex-row align-items-center justify-content-between">
            <button type="submit" className="btn-singup">
              Crear Cuenta
            </button>
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}

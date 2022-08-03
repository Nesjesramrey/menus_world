import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { create as createMenu } from "../../services/menus";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../../src/components/Input/index";
import Select from "../../components/Select/index";

import "./Form.css";

export default function Form() {
  // Local state
  const [dishName, setDishName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const cleanForm = () => {
    setDishName("");
    setCategory("");
    setDescription("");
    setPrice("");
  };

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
  let [files, setFiles] = useState([]);
  const { getRootProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
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
    <div className="mainContainer">
      <div className="container-form">
        <p className="title-form">MENU'S WORLD</p>
        <h2 className="subtitle">Formulario de registro de su platillo</h2>
        <p>Ingresa tus datos aqui </p>

        <form onSubmit={handleSubmit}>
          <label className="label_form">Platillo:</label>
          <Input
            type="text"
            className="input_form"
            placeholder=""
            id="meal"
            name="meal"
            value={dishName}
            callback={(e) => setDishName(e.target.value)}
          />

          <label className="label_form">Descripcion:</label>
          <Input
            type="text"
            className="input_form"
            placeholder=""
            id="meal"
            name="meal"
            value={description}
            callback={(e) => setDescription(e.target.value)}
          />

          <label className="label_form">Precio:</label>
          <Input
            type="text"
            className="input_form"
            placeholder=""
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
          <label className="label_form">Selecciona una categoria:</label>
          <Select
            type="text"
            className="select_form"
            placeholder=""
            value={category}
            callback={(e) => setCategory(e.target.value)}
          />
          <button type="submit" className="btn-7 button_form">
            Registrar platillo
          </button>
          <div className="instructions">
            <div className="instructions-form">
              <strong>Platillo:</strong> Nombre del platillo como aparece en su
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
        <img
          src="https://static-sevilla.abc.es/media/gurmesevilla/2012/01/comida-rapida-casera.jpg"
          alt="Placeholder"
          width="1200"
        />
        <p className="description-food">
          El descubrimiento de un nuevo plato es de más provecho para la
          humanidad que el descubrimiento de una estrella. (Jean Anthelme
          Brillat-Savarin)
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}


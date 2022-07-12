import { useState } from "react";
import { create as createMenu } from "../../services/menus";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../../src/components/Input/index";

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
      toast.error("Llena el form!!!!");
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
      toast.success("Todo fine!!");
      cleanForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">MENU'S WORLD</h1>
      <h2 className="subtitle">Formulario de registro</h2>
      <p>Hola aqui puedes registrar tu menu</p>

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

        <label className="label_form">Categoria del platillo:</label>
        <Input
          type="text"
          className="input_form"
          placeholder=""
          id="meal"
          name="meal"
          value={category}
          callback={(e) => setCategory(e.target.value)}
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

        <button type="submit" className="btn btnbutton_form">
          Registrar platillo
        </button>
        <div className="instructions">
          <ul>
            <li>
              <strong>Platillo:</strong> Nombre del platillo como aparece en su
              carta
            </li>
            <li>
              <strong>Categoria del latillo:</strong> Aqui tienes que
              especificar si es una entreda, corte, postre, bebida o las
              categorias que ya tengas definidas
            </li>
            <li>
              <strong>Descripcion:</strong> Aqui puedes describir los
              ingredientes principales asi como los gramajes de tus platillos
            </li>
            <li>
              <strong>Precio:</strong> Precio incluyendo los impuestos
              aplicables de tu localidad
            </li>
          </ul>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  retrieve as retrieveDish,
  update as updateDish,
} from "../../../services/menus";

import "./Edit.css";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../../components/Input";
import Select from "../../../../src/components/Select";

export default function MenuEdit() {
  // Local state
  const [isLoading, setIsLoading] = useState(true);
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

  // RRD
  const { id } = useParams();
  //console.log(id);
  const navigate = useNavigate();

  useEffect(() => {
    const getMenu = async () => {
      const data = await retrieveDish(id);
      setDishName(data.dishName);
      setCategory(data.category);
      setDescription(data.description);
      setPrice(data.price);
      setIsLoading(false);
    };

    getMenu();
  }, [id]);

  const isEmpty = (value) => !value;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      isEmpty(dishName) ||
      isEmpty(category) ||
      isEmpty(description) ||
      isEmpty(price)
    ) {
      toast.error("Favor de capturar el rubro a modificar");
      return;
    }

    const data = {
      dishName,
      category,
      description,
      price,
    };

    try {
      await updateDish(id, data);
      toast.success("Gracias se ha modificado el platillo");
      cleanForm();
      navigate(`/menu/edit/${id}`);
    } catch (error) {
      toast.error("Algo salió mal");
      console.error(error);
    }
  };

  return (
    <div className="mainContainer">
      <div className="container-form col-12 col-md-12">
        <h2 className="title-edit col-12 col-md-12">
          Introducir los datos del platillo para actualizar
        </h2>
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          <form className="form-edit col-10 col-md-12" onSubmit={handleSubmit}>
            <label className="label_form">Platillo:</label>
            <Input
              type="text"
              className="input_form col-12"
              placeholder=""
              id="meal"
              name="meal"
              value={dishName || ""}
              callback={(e) => setDishName(e.target.value)}
            />

            <label className="label_form">Descripcion:</label>
            <Input
              type="text"
              className="input_form col-12"
              placeholder=""
              id="meal"
              name="meal"
              value={description || ""}
              callback={(e) => setDescription(e.target.value)}
            />

            <label className="label_form">Precio:</label>
            <Input
              type="text"
              className="input_form col-12"
              placeholder=""
              id="meal"
              name="meal"
              value={price || ""}
              callback={(e) => setPrice(e.target.value)}
            />
            <label className="label_form">Selecciona una categoria:</label>
            <Select
              type="text"
              className="select_form"
              placeholder=""
              value={category || ""}
              callback={(e) => setCategory(e.target.value)}
            />
            <button type="submit" className="btn-edit">
              Modificar platillo
            </button>
          </form>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

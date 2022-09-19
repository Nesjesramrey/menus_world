import { useNavigate } from "react-router-dom";
import { useState } from "react";

//services
import { create as createUser } from "../../services/users";
import { createRestaurant } from "../../services/restaurants";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Components
import Input from "../../../src/components/Input/index";
import TextArea from "../../components/TextArea";

//CSS
import "./Register.css";

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

  const isEmpty = (value) => !value;

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
    const data = {
      username,
      email,
      password,
      restaurants,
      descriptionRestaurant,
      userType,
    };

    try {
      if (userType === "Comensal") {
        await createUser(data);
        toast.success("Registro exitoso!!");
        cleanForm();
        navigate("/restaurants");
      } else {
        await createUser(data);
        await createRestaurant(data);
        toast.success("Registro exitoso!!");
        cleanForm();
        navigate("/restaurants");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="col-12 col-md-12 p-5 ">
      <div className="title-register">
        <h1 className="card-title text-center">Bienvenido a Menu's World</h1>
      </div>
      <p className="description-register">
        Con tu registro podrás comentar y calificar los platillos.
        Si eres administrador o dueño de un restaurante al darte de alta podrás cargar
        tus platillos y generar un QR con acceso directo a tu menú.
      </p>
      <div className="card-body">
        <form className="" onSubmit={handleSubmit}>
          <div className="select-control">
            <select
              type="text"
              className="form-control line-input mb-4"
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
              className="form-control line-input mb-4"
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
              className="form-control line-input mb-4"
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
                  ? "form-control line-input mb-4 active"
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
                  ? "form-control line-input mb-4 active"
                  : "form-control d-none"
              }`}
              placeholder="Danos un breve descripción de tu restaurante..."
              value={descriptionRestaurant}
              callback={(e) => setDescriptionRestaurant(e.target.value)}
            />
          </div>

          <div className="form-group">
            <Input
              type="password"
              className="form-control line-input mb-4"
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
            <button type="submit" className="btn-prim">
              Crear Cuenta
            </button>
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}

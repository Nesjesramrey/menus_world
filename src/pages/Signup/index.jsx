import { useState } from "react";
import { create as createUser } from "../../services/users";

// Components

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../../src/components/Input/index";

// CSS
import "./Signup.css";

export default function Signup() {
  // Local state
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [restaurants, setRestaurants] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [itemActive, setItemActive] = useState(null);

  // This is to active input restaurant
  const isActive = (itemTypeUser) => itemTypeUser === itemActive;

  const cleanForm = () => {
    setUserName("");
    setEmail("");
    setRestaurants("");
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

    const data = {
      username,
      email,
      password,
      restaurants,
      userType,
    };

    try {
      await createUser(data);
      toast.success("Registro exitoso!!");
      cleanForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-5 ">
          <div className="card">
            <div className="title-registro">
              <h2 className="card-title text-center">Registro</h2>
            </div>
            <div className="card-body py-md-4">
              <form
                className="form-select form-select-mg"
                onSubmit={handleSubmit}
              >
                <div className="form-group">
                  <div className="select-child">
                    <select
                      type="text"
                      className="form-select form-select-mg2"
                      placeholder=""
                      value={userType}
                      onChange={(e) => setUserType(e.target.value)}
                      onClick={(e) => setItemActive(e.target.value)}
                    >
                      <option value="Select">
                        Selecciona tu tipo de usuario
                      </option>
                      <option value="Comensal">Comensal</option>
                      <option value="Administrador de restaurante">
                        Administrador de restaurante
                      </option>
                    </select>
                  </div>
                  <Input
                    type="text"
                    className="form-control"
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
                    className="form-control"
                    placeholder="Correo"
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
                        ? "form-control active"
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
                  <Input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    id="meal"
                    name="meal"
                    value={password}
                    callback={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <button type="submit" className="btn-signup">
                    Crear Cuenta
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <img
          src="https://resizer.otstatic.com/v2/photos/wide-large/2/32402198.png"
          alt="register"
          className="img-register col-md-7"
        ></img>
        ;
      </div>
      <ToastContainer />
    </div>
  );
}

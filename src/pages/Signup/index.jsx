import { useState } from "react";
import { create as createUser } from "../../services/users";

// Components
import NavBar from "../../../src/components/NavBar";

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
        <div className="col-12 col-md-12 ">
          {NavBar(1)}
          <div className="card">
            <h2 className="card-title text-center">Registro</h2>
            <div className="card-body py-md-4">
              <form className="form-signup col-10" onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="select-child">
                    <select
                      type="text"
                      className="select-signup col-12"
                      placeholder=""
                      value={userType}
                      onChange={(e) => setUserType(e.target.value)}
                      onClick={(e) => setItemActive(e.target.value)}
                    >
                      <option value="Select">
                        Selecciona tu tipo de usuario
                      </option>
                      <option value="Cliente">Cliente</option>
                      <option value="Administrador">Administador</option>
                    </select>
                  </div>
                  <Input
                    type="text"
                    className="controls"
                    placeholder="Name"
                    id="meal"
                    name="meal"
                    value={username}
                    callback={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <Input
                    type="email"
                    className="controls"
                    placeholder="Email"
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
                      isActive("Administrador")
                        ? "controls active"
                        : "controls inactive"
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
                    type="text"
                    className="controls"
                    placeholder="Password"
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
      </div>
      <ToastContainer />
    </div>
  );
}

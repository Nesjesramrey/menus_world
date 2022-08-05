import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

// API functions
import { login as loginUser } from "../../services/users";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../../src/components/Input/index";

// Components
import NavBar from "../../../src/components/NavBar";

import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  // Local state
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const cleanForm = () => {
    setUserName("");
    setPassword("");
  };

  const isEmpty = (value) => !value;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isEmpty(username) || isEmpty(password)) {
      toast.error("Se ingresaron datos incorrectos!!!!");
      return;
    }

    const cookies = new Cookies();
    const data = {
      username,
      password,
    };

    try {
      await loginUser(data);
      toast.success("Inicio de sesion exitoso!!");
      cleanForm();
      cookies.set("Usuario", data.username, { path: "/" });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      {NavBar(1)}
      <div className="row justify-content-center">
        <div className="col-12 col-md-12 ">
          <div className="card">
            <h2 className="card-title text-center">Iniciar Sesion</h2>
            <div className="card-body py-md-4">
              <form className="form-login col-10" onSubmit={handleSubmit}>
                <Input
                  type="text"
                  className="controls"
                  placeholder="Usuario"
                  id="meal"
                  name="meal"
                  value={username || ""}
                  callback={(e) => setUserName(e.target.value)}
                />
                <Input
                  type="password"
                  className="controls"
                  placeholder="Password"
                  id="meal"
                  name="meal"
                  value={password || ""}
                  callback={(e) => setPassword(e.target.value)}
                />

                <div className="container-btn-login">
                  <button type="submit" className="btn-login">
                    Ingresar
                  </button>
                  <button
                    className="btn-login"
                    onClick={() => navigate(`/registro`)}
                  >
                    Registrarte
                  </button>
                  <button className="btn-login" onClick={() => navigate(`/`)}>
                    Home
                  </button>
                </div>
                <p className="forget-password">¿Olvidastes tu Contraseña?</p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

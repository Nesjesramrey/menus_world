import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

// API functions
import { login as loginUser } from "../../services/users";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import NavBar from "../../../src/components/NavBar";
import Input from "../../../src/components/Input/index";

//CSS
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
      const response = await loginUser(data);
      console.log(response);
      cleanForm();
      cookies.set("Usuario", response.data.info.userName, { path: "/" });
      cookies.set("TipoUsuario", response.data.info.userCategory, {
        path: "/",
      });
      cookies.set("NombreResturante", response.data.info.userRestaurant[0], {
        path: "/",
      });
      if (response.data.info.userCategory === "Comensal") {
        toast.success("Inicio de sesion exitoso!!");
        navigate("/");
      }
      if (response.data.info.userCategory === "Administrador de restaurante") {
        toast.success("Inicio de sesion exitoso!!");
        navigate("/formulario");
      } else {
        toast.error("Usuario o contrasena incorrectos");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      {NavBar(1)}
      <div className="row justify-content-center">
        <div className="col-4 col-md-4 ">
          <div className="card">
            <h2 className="card-title text-center title-h2">Iniciar Sesion</h2>
            <div className="card-body py-md-4">
              <form className="form-login col-10" onSubmit={handleSubmit}>
                <Input
                  type="text"
                  className="form-control inputs"
                  placeholder="Usuario"
                  id="meal"
                  name="meal"
                  value={username || ""}
                  callback={(e) => setUserName(e.target.value)}
                />
                <Input
                  className="form-control"
                  type="password"
                  placeholder="Contraseña"
                  id="meal"
                  name="meal"
                  value={password || ""}
                  callback={(e) => setPassword(e.target.value)}
                />

                <div className="container-btn-login">
                  <button type="submit" className="btn-login">
                    Ingresar
                  </button>
                </div>

                <div className="container-pass">
                  <p className="forget-password">¿Olvidaste tu Contraseña?</p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/10/6d/5d/1d/entrada-restaurant.jpg"
          alt="register"
          className="img-register col-md-7"
        ></img>
      </div>
      <ToastContainer />
    </div>
  );
}

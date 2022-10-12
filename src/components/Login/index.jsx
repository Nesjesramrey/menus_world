import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

// API functions
import { login as loginUser } from "../../services/users";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Input from "../../../src/components/Input/index";

//CSS
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  // Local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const cleanForm = () => {
    setEmail("");
    setPassword("");
  };

  const isEmpty = (value) => !value;
  const cookies = new Cookies();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isEmpty(email) || isEmpty(password)) {
      toast.error("Se ingresaron datos incorrectos!!!!");
      return;
    }

    const data = {
      email,
      password,
    };

    try {
      const response = await loginUser(data);
      cleanForm();
      cookies.set("Id", response.data.info.id, { path: "/" });
      cookies.set("Usuario", response.data.info.userName, { path: "/" });
      cookies.set("TipoUsuario", response.data.info.userCategory, {
        path: "/",
      });
      cookies.set("NombreResturante", response.data.info.userRestaurant[0], {
        path: "/",
      });
      if (response.data.info.userCategory === "Comensal") {
        toast.success("Inicio de sesión exitoso!!");
        navigate(`/restaurants`);
      }
      if (response.data.info.userCategory === "Administrador de restaurante") {
        toast.success("Inicio de sesión exitoso!!");
        navigate(`/restaurants`);
      }
    } catch (error) {}
  };

  return (
    <div className="container login-container p-2 justify-content-center">
      <div className="login-item p-2 ">
        <h2 className="card-title text-center mb-4 title-h2">Iniciar Sesión</h2>
        <form className="form-content" onSubmit={handleSubmit}>
          <div className="form">
            <Input
              required
              type="text"
              // placeholder="Email"
              id="meal"
              name="meal"
              value={email || ""}
              callback={(e) => setEmail(e.target.value)}
            />
            <label className="lbl-name">
              <span className="text-name">Email</span>
            </label>
          </div>
          <div className="form">
            <Input
              type="password"
              // placeholder="Contraseña"
              id="meal"
              name="meal"
              value={password || ""}
              callback={(e) => setPassword(e.target.value)}
            />
            <label className="lbl-name">
              <span className="text-name">Contraseña</span>
            </label>
          </div>

          <button type="submit" className="btn-login">
            Ingresar
          </button>
        </form>
        <div className="container-pass">
          <p className="forget-password">¿Olvidaste tu Contraseña?</p>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

import { useState } from "react";
import { login as loginUser } from "../../services/users";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../../src/components/Input/index";

import "./Login.css";

export default function Login() {
  // Local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const cleanForm = () => {
    setEmail("");
    setPassword("");
  };

  const isEmpty = (value) => !value;

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
      await loginUser(data);
      toast.success("Login exitoso!!");
      cleanForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10 col-md-12 ">
          <div className="card">
            <h2 className="card-title text-center">Login</h2>
            <div className="card-body py-md-4">
              <form className="form-login col-10" onSubmit={handleSubmit}>
                <h5>Formulario Login</h5>
                <Input
                  type="text"
                  className="controls"
                  placeholder="Usuario"
                  id="meal"
                  name="meal"
                  value={email || ""}
                  callback={(e) => setEmail(e.target.value)}
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
                <button type="submit" className=" col-10 btn-login">
                  Ingresar
                </button>
                <p>
                  <a className="btn-login" href="/registro">
                    Registrarte{" "}
                  </a>
                  <a className="btn-login" href="/">
                    Home{" "}
                  </a>
                </p>
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

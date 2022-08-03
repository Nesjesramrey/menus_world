import { useState } from "react";
import { create as createUser } from "../../services/users";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../../src/components/Input/index";

import "./Signup.css";

export default function Signup() {
  // Local state
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const cleanForm = () => {
    setUserName("");
    setEmail("");
    setRestaurant("");
    setPassword("");
  };

  const isEmpty = (value) => !value;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isEmpty(username) || isEmpty(email) || isEmpty(password)) {
      toast.error("Se ingresaron datos incorrectos!!!!");
      return;
    }

    const data = {
      username,
      email,
      password,
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
        <div className="col-6 col-md-12 ">
          <div className="card">
            <h2 className="card-title text-center">Registro</h2>
            <div className="card-body py-md-4">
              <form className="form-signup col-10" onSubmit={handleSubmit}>
                <div className="form-group">
                  <Input
                    type="text"
                    className="form-control"
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
                    className="form-control"
                    placeholder="Email"
                    id="meal"
                    name="meal"
                    value={restaurant}
                    callback={(e) => setRestaurant(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="Nombre del Restaurante"
                    id="meal"
                    name="meal"
                    value={email}
                    callback={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    id="meal"
                    name="meal"
                    value={password}
                    callback={(e) => setPassword(e.target.value)}
                  />
                  <div className="select-child">
                    <select
                      type="text"
                      className="select_signup"
                      placeholder=""
                      value={userType}
                      onChange={(e) => setUserType(e.target.value)}
                    >
                      <option value="Select">Selecciona una categoria</option>
                      <option value="Comensal">Cliente</option>
                      <option value="Administador restaurant">
                        Administador
                      </option>
                    </select>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <a className="btn-login" href="/login">
                    Login
                  </a>
                  <a className="btn-login" href="/">
                    Home
                  </a>
                  <button type="submit" className="btn-login">
                    Create Account
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

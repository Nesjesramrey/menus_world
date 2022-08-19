import { useNavigate } from "react-router-dom";
import { useState } from "react";

//services
import { create as createUser } from "../../services/users";

//Image
import logo from "../../assets/logo200.png";

//Cookies
import Cookies from "universal-cookie";

//Modal
import Modal from "react-modal";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Components
import Input from "../../../src/components/Input/index";
import Login from "../../../src/pages/Login/index";

//CSS
import "./Home.css";

//Here begin the function
export default function Home() {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const userLogged = cookies.get("Usuario");

  //Styles modal
  const customStyles = {
    content: {
      top: "40%",
      left: "50%",
      right: "50%",
      bottom: "5%",
      marginRight: "-20%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#root");

  //This is for remove cookies of user
  const logout = () => {
    toast.success("Gracias por tu visita vuelve pronto!!");
    cookies.remove("Usuario", { path: "/" });
    cookies.remove("TipoUsuario", { path: "/" });
    cookies.remove("NombreResturante", { path: "/" });
    cookies.remove("Id", { path: "/" });
    navigate("/");
  };
  // Local state
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [restaurants, setRestaurants] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [itemActive, setItemActive] = useState(null);
  const [itemActiveRegister, setItemActiveRegister] = useState("NoRegister");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // This is to active input restaurant
  const isActive = (itemTypeUser) => itemTypeUser === itemActive;

  //This active register form
  const isActiveRegister = (itemRegister) =>
    itemRegister === itemActiveRegister;

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
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="m-1 d-flex flex-row ">
      <img
        src="https://www.mobydecmuebles.com/wp-content/uploads/2019/09/restaurante-naranja.jpg"
        alt="cabecera"
        className="img-home"
      ></img>
      <div
        className={`${
          isActiveRegister("NoRegister")
            ? "row justify-content-center container active"
            : "row justify-content-center container d-none"
        }`}
      >
        
        <img  src={logo} alt="logo" className="img-home-logo"/>
        <h3 className="p-home">
          Esta pagina busca mejorar tu experiencia digital de consulta de
          menus.Te invitamos a registrarte o ir directamente a ver los menu
        </h3>
        <div className=" d-flex justify-content-center">
          <button
            type="button"
            className={`${userLogged ? "btn-home active" : "btn-home d-none"}`}
            onClick={logout}
          >
            Cerrar Sesion
          </button>

          <button
            onClick={() => setModalIsOpen(true)}
            type="button"
            className={`${!userLogged ? "btn-home active" : "btn-home d-none"}`}
          >
            Inicio de Sesion
          </button>

          <button
            type="button"
            className="btn-home-registrer"
            value="Register"
            onClick={(e) => setItemActiveRegister(e.target.value)}
          >
            Registrarme
          </button>
        </div>
      </div>
      <div
        className={`${
          isActiveRegister("Register") ? "container active" : "container d-none"
        }`}
      >
        <div className="col-12 col-md-12  ">
          <div className="title-registro">
            <h2 className="card-title text-center">Registro</h2>
          </div>
          <div className="card-body py-md-4 form-select form-select-mg">
            <form className="" onSubmit={handleSubmit}>
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
                <button type="submit" className="btn-singup">
                  Crear Cuenta
                </button>
              </div>
            </form>
            <button
              className="btn-singup "
              onClick={(e) => setItemActiveRegister(e.target.value)}
              value="NoRegister"
            >
              Regresa inicio
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <Login />
        <button
          className="btn-close position-absolute top-0 end-0 "
          onClick={() => setModalIsOpen(false)}
        ></button>
      </Modal>
      <ToastContainer />
    </div>
  );
}

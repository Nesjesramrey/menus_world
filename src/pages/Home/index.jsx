import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
import Login from "../../../src/components/Login";
import Register from "../../../src/components/Register";

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
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
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

  const [itemActiveRegister, setItemActiveRegister] = useState("NoRegister");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //This active register form
  const isActiveRegister = (itemRegister) =>
    itemRegister === itemActiveRegister;

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
        <img src={logo} alt="logo" className="img-home-logo" />
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
        <button
          className="btn-singup "
          onClick={(e) => setItemActiveRegister(e.target.value)}
          value="NoRegister"
        >
          Regresa inicio
        </button>

        <Register />
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

import { useNavigate } from "react-router-dom";
import { useState } from "react";

//Image
import logo from "../../assets/logo500.png";

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
    <div className="container g-0">
      <div className="row g-0">
        <div className="col col-lg-7 d-sm-none d-md-block">
          <img
            className="img-fluid"
            src="https://www.mobydecmuebles.com/wp-content/uploads/2019/09/restaurante-naranja.jpg"
            alt="cabecera"
          ></img>
        </div>

        <div className="col col-12 col-lg-5 d-flex flex-row justify-content-center align-items-center">
          <div
            className={`${
              isActiveRegister("NoRegister")
                ? "startContainer d-flex flex-column aling-items-center justify-content-evenly active"
                : "startContainer d-flex flex-column aling-items-center justify-content-evenly d-none"
            }`}
          >
            <div className="d-flex flex-row justify-content-center">
              <img src={logo} alt="Menu's World" className="img-home-logo" />
            </div>
            <div>
              <h3 className="p-home">
                Deja atras la experiencia PDF o imágenes para consultar tus
                platillos favoritos, disfruta tus alimentos y comparte tus
                opiniones
              </h3>
            </div>
            <div className="d-flex flex-row justify-content-center">
              <button
                type="button"
                className={`${
                  userLogged ? "btn-prim active" : "btn-prim d-none"
                }`}
                onClick={logout}
              >
                Cerrar sesión
              </button>

              <button
                onClick={() => setModalIsOpen(true)}
                type="button"
                className={`${
                  !userLogged ? "btn-prim active" : "btn-prim d-none"
                }`}
              >
                Iniciar sesión
              </button>

              <button
                type="button"
                className="btn-second"
                value="Register"
                onClick={(e) => setItemActiveRegister(e.target.value)}
              >
                Crear cuenta
              </button>
            </div>
          </div>

          <div
            className={`${
              isActiveRegister("Register")
                ? "container active"
                : "container d-none"
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
      </div>
    </div>
  );
}

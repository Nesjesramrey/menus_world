import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//CSS
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const userName = cookies.get("Usuario");

  const logout = () => {
    cookies.remove("Usuario", { path: "/" });
    cookies.remove("TipoUsuario", { path: "/" });
    cookies.remove("NombreResturante", { path: "/" });
    navigate("/");
    toast.success("Gracias por tu visita vuelve pronto!!");
  };

  return (
    <div className="container-home">
      <img
        src="https://www.lifeder.com/wp-content/uploads/2018/04/Nuestra-comida-deberia-ser-nuestra-medicina-y-nuestra-medicina-deberia-ser-nuestra-comida.-min.jpg"
        alt="cabecera"
        className="img-home"
      ></img>
      <div className="container-home-menu">
        <h1 className="title-home">MENU'S WORLD</h1>
        <h2 className="p-home">Bienvenido {userName}</h2>
        <h2 className="p-home">
          Esta pagina busca mejorar tu experiencia digital de consulta de
          menus.Te invitamos a registrarte o ir directamente a ver los menu
        </h2>

        <button type="button" className="btn-home" onClick={logout}>
          Cerrar Sesion
        </button>

        <button
          type="button"
          className="btn-home"
          onClick={() => navigate(`registro`)}
        >
          Registrarme
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

import { useEffect, useState } from "react";
import { listRestaurant as listDishes } from "../../../src/services/menus";
import { useParams, useNavigate } from "react-router-dom";

//CSS
import "./Menu.css";

//Components
import MenuCard from "../../components/MenuCard";
import Delete from "../../../src/pages/Menu/Delete";

//Cokkies for use name of restaurante and user category
import Cookies from "universal-cookie";

//Modal
import Modal from "react-modal";

//Styles modal
const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    right: "50%",
    bottom: "25%",
    marginRight: "-30%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

export default function Menu() {
  // Local state
  const [dishes, setDishes] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // RRD
  const { restaurantName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const list = async () => {
      const data = await listDishes(restaurantName);
      const parsedDishes = Object.keys(data).map((key) => {
        return { id: key, ...data[key] };
      });

      setDishes(parsedDishes);
    };

    list();
  }, [restaurantName]);

  const cookies = new Cookies();
  cookies.set("EndpointRestaurant", restaurantName, { path: "/" });
  const userType = cookies.get("TipoUsuario");

  return (
    <div className="mainContainer">
      <h2 className="titleRestaurant">{`Bienvenido a ${restaurantName}`}</h2>
      <div className="container-btn-form-1 d-flex justify-content-end mb-2 mt-1 me-3">
        <button
          className={`${
            !userType || userType === "Comensal"
              ? "btn-form-1 d-none"
              : "btn-form-1 active"
          }`}
          onClick={() => navigate(`/formulario`)}
        >
          Ir a registrar platillos
        </button>
      </div>
      <div className="container">
        <div className="row">
          {dishes &&
            dishes.map((dish) => <MenuCard dish={dish} navigate={navigate} />)}
        </div>
        <Modal isOpen={modalIsOpen} style={customStyles}>
          <div>Aqui va algo</div>
          <Delete />
          <button
            className="btn-close position-absolute top-0 end-0 "
            onClick={() => setModalIsOpen(false)}
          ></button>
        </Modal>
        <div className="info">
          <p>LA PROPINA NO ES OBLIGATORIA.</p>
          <p>
            ACEPTAMOS PAGOS EN EFECTIVO, TARJETAS VISA, MASTER CARD Y AMERICAN
            EXPRESS.
          </p>

          <p>EL PAGO CON TARJETA NO GENERA NINGUNA COMISIÓN.</p>
        </div>
        <button
          onClick={() => setModalIsOpen(true)}
          type="button"
          className="btn-home active"
        >
          Activa modal
        </button>
        {/* <div className="qrcontainer">
              <QrCode />
        </div> */}
      </div>
    </div>
  );
}

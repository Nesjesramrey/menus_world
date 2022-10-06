import { useEffect, useState } from "react";
import { listRestaurant as listDishes } from "../../../services/menus";
import { useParams, useNavigate } from "react-router-dom";

//CSS
import "./General.css";

//Components
import MenuCard from "../../../components/MenuCard";
import QrCode from "../../../components/QrCode";

//Cokkies for use name of restaurante and user category
import Cookies from "universal-cookie";

export default function Menu() {
  // Local state
  const [dishes, setDishes] = useState([]);

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

  cookies.set("EndpointRestaurant", restaurantName);
  const userType = cookies.get("TipoUsuario");

  const cards = dishes.map((dish, index) => (
    <MenuCard dish={dish} index={index} navigate={navigate} />
  ));

  return (
    <div className="mainContainer container g-0">
      <h1 className="titleRestaurant">{`${
        restaurantName === "undefined"
          ? "Bienvenido busca tu menu"
          : restaurantName
      }`}</h1>
      <div className="container-btn-form-1 d-flex justify-content-end align-items-center">
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
          <QrCode />
      </div>

      <div className="container g-0">
        <div className="row">
          <div className="col col-12 d-flex-r g-0 p-0">{cards}</div>
        </div>
      </div>

      <div className="info">
        <p>LA PROPINA NO ES OBLIGATORIA.</p>
        <p>
          ACEPTAMOS PAGOS EN EFECTIVO, TARJETAS VISA, MASTER CARD Y AMERICAN
          EXPRESS.
        </p>
        <p>EL PAGO CON TARJETA NO GENERA NINGUNA COMISIÓN.</p>
      </div>
    </div>
  );
}

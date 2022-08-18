import { useEffect, useState } from "react";
import { listRestaurant as listDishes } from "../../../src/services/menus";
import { useParams, useNavigate } from "react-router-dom";

//CSS
import "./Menu.css";

//Components
import MenuCard from "../../components/MenuCard";

//Cokkies for use name of restaurante and user category
import Cookies from "universal-cookie";

import QrCode from "../../components/QrCode";

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
  cookies.set("EndpointRestaurant", restaurantName, { path: "/" });
  const userType = cookies.get("TipoUsuario");

  return (
    <div className="mainContainer">
      <h1 className="titleRestaurant">{`${
        restaurantName === "undefined"
          ? "Bienvenido busca tu menu "
          : restaurantName
      }`}</h1>
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
        <div className="containerqr">
              <QrCode />              
        </div>

      </div>
      
      <div className="container">
        <div className="row">
        
          {dishes &&
            dishes.map((dish) => <MenuCard dish={dish} navigate={navigate} />)}
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

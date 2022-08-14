import { useEffect, useState } from "react";
import { sublistRestaurant as listDishes } from "../../../src/services/menus";
import { useParams, useNavigate } from "react-router-dom";
import MenuCard from "../../components/MenuCard";
import Cookies from "universal-cookie";

import "./Menu.css";

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
  }, []);

  const cookies = new Cookies();
  cookies.set("EndpointRestaurant", restaurantName, { path: "/" });
  console.log(cookies);

  return (
    <div className="mainContainer">
      <div className="container">
        <div className="row">
          <div className="container-btn">
            <button
              className="btn-form"
              onClick={() => navigate(`/formulario`)}
            >
              Ir a registrar platillos
            </button>
          </div>
          {dishes &&
            dishes.map((dish) => <MenuCard dish={dish} navigate={navigate} />)}
        </div>

        <div className="info">
          <p>LA PROPINA NO ES OBLIGATORIA.</p>
          <p>
            ACEPTAMOS PAGOS EN EFECTIVO, TARJETAS VISA, MASTER CARD Y AMERICAN
            EXPRESS.
          </p>

          <p>EL PAGO CON TARJETA NO GENERA NINGUNA COMISIÓN.</p>
        </div>
        {/* <div className="qrcontainer">
              <QrCode />
        </div> */}
      </div>
    </div>
  );
}

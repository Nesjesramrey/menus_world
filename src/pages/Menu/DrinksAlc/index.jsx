import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { sublist as listDishes } from "../../../services/menus";
import MenuCardS from "../../../components/MenuCardS";

import "./DrinksAlc.css";

export default function Meat_cut() {
  // Local state
  const [dishes, setDishes] = useState([]);
  // RRD
  const { restaurantName } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const list = async () => {
      const data = await listDishes("Bebidas alcoholicas", restaurantName);
      const parsedDishes = Object.keys(data).map((key) => {
        return { id: key, ...data[key] };
      });

      setDishes(parsedDishes);
    };

    list();
  }, []);

  return (
    <div className="mainContainer">
      <div className="container">
        <div className="row">
          {dishes &&
            dishes.map((dish) => <MenuCardS dish={dish} navigate={navigate} />)}
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
    </div>
  );
}

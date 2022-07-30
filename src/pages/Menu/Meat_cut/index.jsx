import { useEffect, useState } from "react";
import { sublist as listDishes } from "../../../services/menus";

import "./Meat_cut.css";

export default function MeatCut() {
  // Local state
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const list = async () => {
      const data = await listDishes("Cortes");
      const parsedDishes = Object.keys(data).map((key) => {
        return { id: key, ...data[key] };
      });

      setDishes(parsedDishes);
    };

    list();
  }, []);

  const buildMenu = (dish, index) => (
    <div className="card-menu" key={index}>
      <div className="name-food">{dish.dishName}</div>
      <div className="name-food">{dish.description}</div>
      <div className="name-food">$ {dish.price}</div>
    </div>
  );

  return (
    <div>
      <div className="mainContainer">
        <div className="container">
          {dishes.map(buildMenu)}
          <div className="card-info-menu">
            <li>LA PROPINA NO ES OBLIGATORIA.</li>
            <li>
              ACEPTAMOS PAGOS EN EFECTIVO, TARJETAS VISA, MASTER CARD Y AMERICAN
              EXPRESS.
            </li>
            <li>EL PAGO CON TARJETA NO GENERA NINGUNA COMISIÓN.</li>
          </div>
        </div>
      </div>
    </div>
  );
}

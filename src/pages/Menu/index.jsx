import { useEffect, useState } from "react";
import { list as listDishes } from "../../../src/services/menus";
import { useNavigate } from "react-router-dom";

import "./Menu.css";

export default function Menu() {
  // Local state
  const [dishes, setDishes] = useState([]);

  // RRD
  const navigate = useNavigate();

  useEffect(() => {
    const list = async () => {
      const data = await listDishes();
      const parsedDishes = Object.keys(data).map((key) => {
        return { id: key, ...data[key] };
      });

      setDishes(parsedDishes);
    };

    list();
  }, []);

  const buildMenu = (dish, index) => (
    <div className="card-menus" key={index}>
      <div className="name-food">{dish.dishName}</div>
      <div className="name-food">{dish.description}</div>
      <div className="name-food">$ {dish.price}</div>

      <button className="btn-7" onClick={() => navigate(`edit/${dish._id}`)}>
        Editar
      </button>
      <button className="btn-7" onClick={() => navigate(`delete/${dish._id}`)}>
        Eliminar
      </button>
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
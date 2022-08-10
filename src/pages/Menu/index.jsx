import { useEffect, useState } from "react";
import { list as listDishes } from "../../../src/services/menus";
import { useNavigate } from "react-router-dom";
import MenuCard from "../../components/MenuCard";

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



  return (


    <div className="mainContainer">
      <div className="container">
        <div className="row">
          {dishes && dishes.map((dish) => <MenuCard dish={dish} navigate={navigate} />)}
        </div>
        <div className="info">
          <p>LA PROPINA NO ES OBLIGATORIA.</p>

          <p>ACEPTAMOS PAGOS EN EFECTIVO, TARJETAS VISA, MASTER CARD Y AMERICAN EXPRESS.</p>

          <p>EL PAGO CON TARJETA NO GENERA NINGUNA COMISIÓN.</p>
        </div>
      </div>

    </div>

  );

}

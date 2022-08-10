import { useEffect, useState } from "react";
import { sublist as listDishes } from "../../../services/menus";
import MenuCardS from "../../../components/MenuCardS";
import { useNavigate } from "react-router-dom";


import "./Salads.css";

export default function Salads() {
  // Local state
  const [dishes, setDishes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const list = async () => {
      const data = await listDishes("Ensaladas", "Texas Rib");
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
          {dishes && dishes.map((dish) => <MenuCardS dish={dish} navigate={navigate} />)}
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


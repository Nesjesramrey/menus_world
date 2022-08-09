import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { sublist as listDishes } from "../../../services/menus";

import Card from "react-bootstrap/Card";

import "./Meat_cut.css";

export default function Meat_cut() {
  // Local state
  const [dishes, setDishes] = useState([]);
  // RRD
  const { category, restaurantName } = useParams();
  console.log(category, restaurantName);
  const navigate = useNavigate();
  useEffect(() => {
    const list = async () => {
      const data = await listDishes("Cortes", "Fishers");
      const parsedDishes = Object.keys(data).map((key) => {
        return { id: key, ...data[key] };
      });

      setDishes(parsedDishes);
    };

    list();
  }, []);

  const buildMenu = (dish, index) => (
    <div className="containerm">
      <div className="food-menu">
        <div
          className="food"
          key={index}
          onClick={() => navigate(`/detalle/${dish._id}`)}
        >
          <div className="food-image">
            <img src={dish.image_Url} alt="Food" />
          </div>
          <div className="name-food-name">{dish.dishName}</div>
          <div className="name-food-descrip">{dish.description}</div>
          <div className="name-food-price">$ {dish.price}</div>
        </div>
      </div>
    </div>
  );

  return (
    <Card>
      <div>
        <div className="mainContainer">
          <div className="container">
            {dishes.map(buildMenu)}
            <div className="card-info-menu">
              <div className="notes">
                <li>LA PROPINA NO ES OBLIGATORIA.</li>
                <li>
                  ACEPTAMOS PAGOS EN EFECTIVO, TARJETAS VISA, MASTER CARD Y
                  AMERICAN EXPRESS.
                </li>
                <li>EL PAGO CON TARJETA NO GENERA NINGUNA COMISIÓN.</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

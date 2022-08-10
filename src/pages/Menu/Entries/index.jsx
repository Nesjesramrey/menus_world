import { useEffect, useState } from "react";
import { sublist as listDishes } from "../../../services/menus";
import MenuCard from "../../../components/MenuCard";
import { useNavigate } from "react-router-dom";

import "./Entries.css";

export default function Entries() {
  // Local state
  const [dishes, setDishes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const list = async () => {
      const data = await listDishes("Entradas");
      const parsedDishes = Object.keys(data).map((key) => {
        return { id: key, ...data[key] };
      });

      setDishes(parsedDishes);
    };

    list();
  }, []);

  // const buildMenu = (dish, index) => (
         
  //   <div className="card-menu-global" key={index}>
  //     <div className="name-food">{dish.dishName}</div>
      
  //     <div className="name-food">{dish.description}</div>
  //     <div className="name-food">$ {dish.price}</div>
      
  //   </div> 
        
  // );
  
  return (
    <div className="mainContainer">
      <div className="container">
        <div className="row">
          {dishes && dishes.map((dish) => <MenuCard dish={dish} navigate={navigate} />)}
        </div>
        <div className="card-info-menu">
          <div className="info">
            <p>LA PROPINA NO ES OBLIGATORIA.</p>

            <p>ACEPTAMOS PAGOS EN EFECTIVO, TARJETAS VISA, MASTER CARD Y AMERICAN EXPRESS.</p>

            <p>EL PAGO CON TARJETA NO GENERA NINGUNA COMISIÓN.</p>
          </div>
        </div>

      </div>
    </div>
  );
}